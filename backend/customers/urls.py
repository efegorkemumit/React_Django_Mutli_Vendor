from django.urls import path, include
from .views import CustomersUserRegisterView

app_name ='customers'


urlpatterns = [
    path('register/', CustomersUserRegisterView.as_view(), name ="register" ),
  
]