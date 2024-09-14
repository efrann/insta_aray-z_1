from django.contrib import admin
from .models import InstagramAnalysis, PopularPost

class PopularPostInline(admin.TabularInline):
    model = PopularPost
    extra = 0

class InstagramAnalysisAdmin(admin.ModelAdmin):
    list_display = ('username', 'full_name', 'follower_count', 'following_count', 'posts_count', 'analyzed_at')
    search_fields = ('username', 'full_name')
    list_filter = ('analyzed_at',)

class PopularPostAdmin(admin.ModelAdmin):
    list_display = ('analysis', 'likes_count', 'comments_count')
    search_fields = ('analysis__username', 'caption')
    list_filter = ('analysis',)

admin.site.register(InstagramAnalysis, InstagramAnalysisAdmin)
admin.site.register(PopularPost, PopularPostAdmin)