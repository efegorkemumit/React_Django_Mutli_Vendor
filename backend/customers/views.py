from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework import status
from .serializers import CustomerUserRegisterSerializer, MyTokenObtainPairSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomerUserProfile
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class= MyTokenObtainPairSerializer

@permission_classes((permissions.AllowAny,))
class CustomersUserRegisterView(APIView):
    def post(self, request):
        data = request.data.copy()
        password = data.get('password')
        if password:
            data['password'] = make_password(password)
        serializer = CustomerUserRegisterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)