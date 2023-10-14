from django.urls import path, include
from .views import CustomersUserRegisterView, CustomersUserLoginView

app_name ='customers'


urlpatterns = [
    path('register/', CustomersUserRegisterView.as_view(), name ="register" ),
    path('login/', CustomersUserLoginView.as_view(), name ="login" ),
  
  
]