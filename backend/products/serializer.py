from django.urls import path, include
from rest_framework import  serializers
from .models import Category


# Serializers define the API representation.
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'