from django.shortcuts import render
from rest_framework import routers, serializers, viewsets
from .models import Category
from .serializer import CategorySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

