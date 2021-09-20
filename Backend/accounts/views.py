from django.shortcuts import render
from rest_framework import serializers
# Create your views here.
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.views.decorators.clickjacking import xframe_options_exempt
from django.http import HttpResponse
# @xframe_options_exempt
# def ok_to_load_in_a_frame(request):
#     return HttpResponse("This page is safe to load")

class ProfileView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
        }
        return Response(content)

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializers = self.serializer_class(data=request.data,
                                            context={'request':request} )
        serializers.is_valid(raise_exception=True)
        user = serializers.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token':token.key,
            'username':user.username,
            'firstname':user.first_name,
            'user_id':user.pk,
            'email':user.email
        })
        


