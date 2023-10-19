from django.apps import AppConfig
from django.conf import settings

customer_setting = settings.CUSTOMER_SETTING

class CustomersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'customers'
