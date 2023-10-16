from django.urls import path, include
from .views import CustomersUserRegisterView, MyTokenObtainPairView, UserProfileView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework_simplejwt.views import TokenVerifyView

from django.conf import settings

customer_setting = settings.CUSTOMER_SETTING

app_name ='customers'


urlpatterns = [
    path('register/', CustomersUserRegisterView.as_view(), name ="register" ),
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('profile/', UserProfileView.as_view(), name='profile'),

  
]