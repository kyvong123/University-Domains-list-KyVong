from accounts.serializers import UserSerializer
from django.urls import path
from rest_framework import urlpatterns
from rest_framework.urlpatterns import format_suffix_patterns
from accounts import views


urlpatterns = [
    path('profile/',views.ProfileView.as_view()),
    path('api/auth/',views.CustomAuthToken.as_view()),
    path('userlist/',views.ProfileList.as_view()),
    # path('userlist/<int:pk>',views.UserSerializer.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
