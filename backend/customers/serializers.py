from django.urls import path, include
from rest_framework import  serializers
from .models import CustomerUserProfile
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class CustomerUserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerUserProfile
        fields = ('id', 'email', 'full_name', 'password', 'is_active')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerUserProfile
        fields = ('id', 'email', 'full_name', 'is_active')


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
   
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializer(self.user).data
        for k, v in serializer.items():
            data[k] = v




        return data
