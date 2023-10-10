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
        category_id = request.query_params.get("category")
        min_price = request.query_params.get("min_price")
        max_price = request.query_params.get("max_price")
        avaible = request.query_params.get("avaible")
        is_new = request.query_params.get("is_new")
        is_top = request.query_params.get("is_top")
        rating = request.query_params.get("rating")

        if slug:
            self.queryset = self.queryset.filter(slug = slug)
        if category_id:
            self.queryset = self.queryset.filter(category = category_id)
        if min_price:
            self.queryset = self.queryset.filter(price__gte = min_price)
        if max_price:
            self.queryset = self.queryset.filter(price__lte = max_price)
        if avaible:
            avaible = avaible.lower()== "true"
            self.queryset = self.queryset.filter(avaible=avaible)
        if is_new:
            is_new = is_new.lower()== "true"
            self.queryset = self.queryset.filter(is_new=is_new)
        if is_top:
            is_top = is_top.lower()== "true"
            self.queryset = self.queryset.filter(is_top=is_top)
       
        
      


        serializer = ProductSerializer(self.queryset, many=True)
        return Response(serializer.data)
