from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import logging
import traceback
import json
from .instagram_scraper import get_instagram_data, process_user_data, process_posts_data

logger = logging.getLogger(__name__)

class InstagramAnalyzeView(APIView):
    def post(self, request):
        username = request.data.get('username')
        if not username:
            return Response({'error': 'Username is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            logger.info(f"Analyzing profile for username: {username}")
            
            # Önce kullanıcı verilerini çek ve işle
            user_data = get_instagram_data(username, "/v1/info?username_or_id_or_url={}&include_about=true")
            processed_user_data = process_user_data(user_data)
            
            # İşlenmiş kullanıcı verilerini yazdır (debug amaçlı)
            print(json.dumps(processed_user_data, indent=4, ensure_ascii=False))
            
            # Kullanıcı profili ve gönderilerini birleştir
            combined_data = {
                "user_profile": processed_user_data["data"],
                "user_posts": {"items": []}  # Varsayılan olarak boş liste
            }

            # Profil gizli değilse post verilerini çek
            if not processed_user_data["data"]["is_private"]:
                posts_data = get_instagram_data(username, "/v1.2/posts?username_or_id_or_url={}")
                processed_posts_data = process_posts_data(posts_data)
                
                # İşlenmiş post verilerini yazdır (debug amaçlı)
                print(json.dumps(processed_posts_data, indent=4, ensure_ascii=False))
                
                combined_data["user_posts"] = processed_posts_data["data"]

            logger.info(f"Successfully analyzed profile for username: {username}")
            return Response(combined_data)

        except Exception as e:
            logger.error(f"Error during analysis for username {username}: {str(e)}")
            logger.error(traceback.format_exc())
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
