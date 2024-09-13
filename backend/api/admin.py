from django.contrib import admin
from .models import InstagramAnalysis, PopularPost

class PopularPostInline(admin.TabularInline):
    model = PopularPost
    extra = 0

@admin.register(InstagramAnalysis)
class InstagramAnalysisAdmin(admin.ModelAdmin):
    list_display = ('username', 'full_name', 'followers_count', 'analyzed_at')
    search_fields = ('username', 'full_name')
    inlines = [PopularPostInline]

@admin.register(PopularPost)
class PopularPostAdmin(admin.ModelAdmin):
    list_display = ('analysis', 'likes_count', 'comments_count')
    search_fields = ('analysis__username', 'caption')