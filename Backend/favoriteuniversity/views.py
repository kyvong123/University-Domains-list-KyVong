from django.shortcuts import render
from rest_framework import generics
from favoriteuniversity.models import FavoriteUniversity
from favoriteuniversity.serializers import FavoriteUniversitySerializer

# Create your views here.
class FavoriteList(generics.ListCreateAPIView):
    queryset = FavoriteUniversity.objects.all()
    serializer_class = FavoriteUniversitySerializer

class FavoriteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = FavoriteUniversity
    serializer_class = FavoriteUniversitySerializer