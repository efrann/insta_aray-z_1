from django.db import models

class InstagramAnalysis(models.Model):
    username = models.CharField(max_length=255)
    full_name = models.CharField(max_length=255)
    biography = models.TextField(blank=True)
    followers_count = models.IntegerField()
    follows_count = models.IntegerField()
    posts_count = models.IntegerField()
    profile_pic_url = models.URLField()
    analyzed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Analysis for {self.username}"

class PopularPost(models.Model):
    analysis = models.ForeignKey(InstagramAnalysis, related_name='popular_posts', on_delete=models.CASCADE)
    image_url = models.URLField()
    caption = models.TextField()
    location = models.CharField(max_length=255, blank=True)
    likes_count = models.IntegerField()
    comments_count = models.IntegerField()

    def __str__(self):
        return f"Post for {self.analysis.username}"