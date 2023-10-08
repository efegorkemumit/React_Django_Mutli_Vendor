from django.contrib import admin
from .models import CustomerUserProfile

class CustomerUserProfileAdmin(admin.ModelAdmin):
    pass
    # başka özellik eklemek istiyorsan burdan ekle

admin.site.register(CustomerUserProfile, CustomerUserProfileAdmin )
