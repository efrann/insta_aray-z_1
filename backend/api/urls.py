from django.urls import path
from .views import InstagramAnalyzeView, GetInstagramAnalysis, dashboard

urlpatterns = [
    path('analyze', InstagramAnalyzeView.as_view(), name='analyze'),  # Slash'sız versiyon
   #path('analyze/', InstagramAnalyzeView.as_view(), name='analyze_with_slash'),  # Slash'lı versiyon
    #path('get-analysis/<str:username>/', GetInstagramAnalysis.as_view(), name='get-analysis'), #Get Analysis view'ini endpoint olarak çağırır
    #path('dashboard/', dashboard, name='dashboard'), #Dashboard view'ini endpoint olarak çağırır
]