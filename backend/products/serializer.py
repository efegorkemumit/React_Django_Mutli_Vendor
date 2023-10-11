from django.urls import path, include
from rest_framework import  serializers
from .models import Category, Brand, Product


# Serializers define the API representation.
class CategorySerializer(serializers.ModelSerializer):
    product_count = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = '__all__'
    def get_product_count(self,obj):
        return obj.product_set.count()

class BrandSerializer(serializers.ModelSerializer):
    product_count = serializers.SerializerMethodField()
    class Meta:
        model = Brand
        fields = '__all__'
    def get_product_count(self,obj):
        return obj.product_set.count()

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'