from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import logging
import traceback
from .instagram_scraper import get_instagram_data, process_user_data, get_instagram_data_for_user

logger = logging.getLogger(__name__)

class InstagramAnalyzeView(APIView):
    def post(self, request):
        username = request.data.get('username')
        analysis_type = request.data.get('analysis_type', 'simple')
        
        if not username:
            return Response({'error': 'Username is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            logger.info(f"Analyzing profile for username: {username}, analysis type: {analysis_type}")
            
            # Kullanıcı verilerini çek ve işle
            user_endpoint = f"/v1/info?username_or_id_or_url={username}&include_about=true"
            user_data = get_instagram_data(username, user_endpoint)
            processed_user_data = process_user_data(user_data)
            
            # Diğer verileri çek
            combined_data = get_instagram_data_for_user(username, analysis_type)
            
            # User bilgilerini güncelle
            combined_data['user_info'] = processed_user_data

            logger.info(f"Successfully analyzed profile for username: {username}")
            return Response(combined_data)

        except Exception as e:
            logger.error(f"Error during analysis for username {username}: {str(e)}")
            logger.error(traceback.format_exc())
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
