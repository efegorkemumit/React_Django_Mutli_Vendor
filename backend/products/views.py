from django.shortcuts import render
from rest_framework import viewsets
from .models import Category, Brand , Product
from .serializer import CategorySerializer , BrandSerializer, ProductSerializer
from rest_framework.response import Response
from .schema import category_doc

class CategoryViewSet(viewsets.ViewSet):
    queryset = Category.objects.all()

    @category_doc
    def list(self, request):
        """
        Retrieve a list of all categories.

        This endpoint returns a serialized list of all categories available in the system.

        Parameters:
        - `request`: The HTTP request object.

        Returns:
        A JSON response containing a list of serialized categories.

        Example:
        {
            "categories": [
                {
                    "id": 1,
                    "title": "Category 1",
                    "slug": "category-1",
                    "photo": "category/1/server/photo.jpg"
                },
                {
                    "id": 2,
                    "title": "Category 2",
                    "slug": "category-2",
                    "photo": null
                }
            ]
        }
        """

        slug = request.query_params.get("slug")
        if slug:
            self.queryset = self.queryset.filter(slug = slug)

        serializer = CategorySerializer(self.queryset, many=True)
        return Response(serializer.data)

class BrandViewSet(viewsets.ViewSet):
    queryset = Brand.objects.all()

    def list(self, request):
       

        slug = request.query_params.get("slug")
        if slug:
            self.queryset = self.queryset.filter(slug = slug)

        serializer = BrandSerializer(self.queryset, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ViewSet):
    queryset = Product.objects.all()

    def list(self, request):
       

        slug = request.query_params.get("slug")
        if slug:
            self.queryset = self.queryset.filter(slug = slug)

        serializer = ProductSerializer(self.queryset, many=True)
        return Response(serializer.data)
