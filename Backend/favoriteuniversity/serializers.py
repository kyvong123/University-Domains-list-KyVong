from django.db.models import fields
from rest_framework import serializers
from favoriteuniversity.models import FavoriteUniversity

class FavoriteUniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteUniversity
        fields = ['id','user','favorite_list']