from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework import status
from .serializers import CustomerUserRegisterSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomerUserProfile

@permission_classes((permissions.AllowAny,))
class CustomersUserLoginView(APIView):
        def post(self, request):
            email = request.data.get('email')
            password = request.data.get('password')

            try:
                user  = CustomerUserProfile.objects.get(email=email)     
            except CustomerUserProfile.DoesNotExist:
                return Response({"error": "User not found"}, status=status.HTTP_400_BAD_REQUEST)
            
            if user.check_password(password):
                refresh = RefreshToken.for_user(user)
                data = {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                    "id": user.id
                }
                return Response(data, status=status.HTTP_200_OK)
            else:
                return Response({"error": "wrong password"}, status=status.HTTP_400_BAD_REQUEST)


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
