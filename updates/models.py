from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200)
    intro = models.TextField()
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True)