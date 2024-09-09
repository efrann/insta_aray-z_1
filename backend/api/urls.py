from django.urls import path
from .views import InstagramAnalyzeView

urlpatterns = [
    path('analyze', InstagramAnalyzeView.as_view(), name='analyze'),  # Slash'sız versiyon
    path('analyze/', InstagramAnalyzeView.as_view(), name='analyze_with_slash'),  # Slash'lı versiyon
]