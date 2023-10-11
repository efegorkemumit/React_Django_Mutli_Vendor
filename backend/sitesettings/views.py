from django.shortcuts import render
from .models import Footer, SocialMedia, About, Slider
from rest_framework import viewsets
from .serializer import FooterSerializer, SocialMediaSerializer, AboutSerializer, SliderSerializer
from rest_framework.response import Response


class FooterListViewSet(viewsets.ViewSet):
    queryset = Footer.objects.all()

    def list(self, request):

        footercolumuns = request.query_params.get("footercolumuns")

        if footercolumuns:
            self.queryset = self.queryset.filter(footercolumuns = footercolumuns)
        serializer = FooterSerializer(self.queryset, many=True)
        return Response(serializer.data)
        


class SocialMediaViewSet(viewsets.ViewSet):
    queryset = SocialMedia.objects.all()

    def list(self, request):
        serializer = SocialMediaSerializer(self.queryset, many=True)
        return Response(serializer.data)


class AboutViewSet(viewsets.ViewSet):
    queryset = About.objects.all()

    def list(self, request):
        serializer = AboutSerializer(self.queryset, many=True)
        return Response(serializer.data)

class SliderViewSet(viewsets.ViewSet):
    queryset = Slider.objects.all()

    def list(self, request):
        serializer = SliderSerializer(self.queryset, many=True)
        return Response(serializer.data)