from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from apify_client import ApifyClient
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

class InstagramAnalyzeView(APIView):
    def post(self, request):
        username = request.data.get('username')
        if not username:
            return Response({'error': 'Username is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            logger.info(f"Analyzing profile for username: {username}")
            client = ApifyClient(settings.APIFY_API_TOKEN)
            run_input = {"usernames": [username]}
            
            run = client.actor("dSCLg0C3YEZ83HzYX").call(run_input=run_input)
            
            items = client.dataset(run["defaultDatasetId"]).list_items().items
            
            if not items:
                logger.warning(f"No data found for username: {username}")
                return Response({'error': 'No data found for this username'}, status=status.HTTP_404_NOT_FOUND)
            
            user_data = items[0]
            
            # Veriyi özetle
            summary = {
                'username': user_data.get('username'),
                'fullName': user_data.get('fullName'),
                'biography': user_data.get('biography'),
                'followersCount': user_data.get('followersCount'),
                'followsCount': user_data.get('followsCount'),
                'postsCount': user_data.get('postsCount'),
                'profilePicUrl': user_data.get('profilePicUrl'),
                'topPosts': []
            }
            
            # En çok beğeni alan 5 gönderiyi ekle
            posts = sorted(user_data.get('latestPosts', []), key=lambda x: x.get('likesCount', 0), reverse=True)[:5]
            for post in posts:
                summary['topPosts'].append({
                    'imageUrl': post.get('displayUrl') or post.get('thumbnailUrl'),  # Alternatif URL de kontrol ediliyor
                    'caption': post.get('caption', '')[:100] + '...' if post.get('caption') else '',
                    'likesCount': post.get('likesCount'),
                    'commentsCount': post.get('commentsCount'),
                })
            
            logger.info(f"Successfully analyzed and summarized profile for username: {username}")
            return Response(summary)

        except Exception as e:
            logger.error(f"Error during analysis for username {username}: {str(e)}")
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)