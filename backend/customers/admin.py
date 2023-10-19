from django.contrib import admin
from .models import CustomerUserProfile
from django.conf import settings

customer_setting = settings.CUSTOMER_SETTING

class CustomerUserProfileAdmin(admin.ModelAdmin):
    pass
    # başka özellik eklemek istiyorsan burdan ekle

admin.site.register(CustomerUserProfile, CustomerUserProfileAdmin )
