from django.db import models

# Create your models here.
class FavoriteUniversity(models.Model):
    user = models.CharField(max_length=10000)
    favorite_list = models.CharField(max_length=10000)

    def __str__(self):
        return self.user