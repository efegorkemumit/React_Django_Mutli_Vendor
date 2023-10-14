from django.urls import path, include
from rest_framework import  serializers
from .models import CustomerUserProfile


class CustomerUserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerUserProfile
        fields = ('id', 'email', 'full_name', 'password', 'is_active')
  