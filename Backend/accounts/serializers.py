from django.db.models import fields
from rest_framework import serializers
from favoriteuniversity.models import FavoriteUniversity
from django.contrib.auth.models import User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password','first_name','last_name','is_staff','password','email','is_active','is_superuser']