from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
import logging
import traceback
import json
from .models import InstagramAnalysis, PopularPost
from .instagram_scraper import get_instagram_data, process_user_data, process_posts_data
# from .ai_service import analyze_with_ai  # Şimdilik yorum satırına alıyoruz

logger = logging.getLogger(__name__)

class InstagramAnalyzeView(APIView):
    def post(self, request):
        # Kullanıcı adını al ve kontrol et
        username = request.data.get('username')
        if not username:
            return Response({'error': 'Username is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            logger.info(f"Analyzing profile for username: {username}")
            
            # Instagram verilerini çek ve işle
            user_data = get_instagram_data(username, "/v1/info?username_or_id_or_url={}&include_about=true")
            posts_data = get_instagram_data(username, "/v1.2/posts?username_or_id_or_url={}")

            # Verileri işle
            processed_user_data = process_user_data(user_data)
            processed_posts_data = process_posts_data(posts_data)
            
            # İşlenmiş verileri yazdır (debug amaçlı)
            print(json.dumps(processed_user_data, indent=4, ensure_ascii=False))
            print(json.dumps(processed_posts_data, indent=4, ensure_ascii=False))
            
            # Kullanıcı profili ve gönderilerini birleştir
            combined_data = {
                "user_profile": processed_user_data["data"],
                "user_posts": processed_posts_data["data"]
            }

            
            # AI analizi için yer tutucu
            # Gelecekte buraya AI analizi eklenecek
            # combined_data["ai_analysis"] = analyze_with_ai(combined_data)

            # Save or update the analysis
            analysis, created = InstagramAnalysis.objects.update_or_create(
                username=combined_data["user_profile"]["about"]["username"],
                defaults={
                    'full_name': combined_data["user_profile"]["full_name"],
                    'biography': combined_data["user_profile"]["biography"],
                    'follower_count': combined_data["user_profile"]["follower_count"],
                    'following_count': combined_data["user_profile"]["following_count"],
                    'posts_count': combined_data["user_profile"]["media_count"],
                    'profile_pic_url': combined_data["user_profile"]["hd_profile_pic_versions"]["url"],
                    # 'ai_analysis': combined_data.get("ai_analysis", ""),  # Gelecekte AI analizi için
                }
            )

            # Clear existing popular posts and add new ones
            analysis.popular_posts.all().delete()
            posts = combined_data["user_posts"]["items"][:6]
            for post in posts:
                PopularPost.objects.create(
                    analysis=analysis,
                    image_url=post.get('thumbnail_url', ''),
                    caption=post.get('caption', {}).get('text', '')[:500],  # Limit caption length
                    location=post.get('location', {}).get('city_name', ''),
                    likes_count=post.get('like_count', 0),
                    comments_count=post.get('comment_count', 0)
                )

            logger.info(f"Successfully analyzed and saved profile for username: {username}")
            return Response(combined_data)

        except Exception as e:
            logger.error(f"Error during analysis for username {username}: {str(e)}")
            logger.error(traceback.format_exc())
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class GetInstagramAnalysis(APIView):
    def get(self, request, username):
        try:
            analysis = InstagramAnalysis.objects.get(username=username)
            data = {
                'username': analysis.username,
                'fullName': analysis.full_name,
                'biography': analysis.biography,
                'followersCount': analysis.followers_count,
                'followsCount': analysis.follows_count,
                'postsCount': analysis.posts_count,
                'profilePicUrl': analysis.profile_pic_url,
                'analyzedAt': analysis.analyzed_at,
                'topPosts': [
                    {
                        'imageUrl': post.image_url,
                        'caption': post.caption,
                        'location': post.location,
                        'likesCount': post.likes_count,
                        'commentsCount': post.comments_count
                    } for post in analysis.popular_posts.all()
                ],
                'ai_analysis_input': prepare_for_ai_analysis(username)
            }
            return Response(data)
        except InstagramAnalysis.DoesNotExist:
            return Response({'error': 'Analysis not found'}, status=status.HTTP_404_NOT_FOUND)

def dashboard(request):
    analyses = InstagramAnalysis.objects.all().order_by('-analyzed_at')
    return render(request, 'api/dashboard.html', {'analyses': analyses})
