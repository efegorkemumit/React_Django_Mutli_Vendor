from django.contrib import admin
from .models import CustomerUser

class CustomerUserAdmin(admin.ModelAdmin):
    pass
    # başka özellik eklemek istiyorsan burdan ekle

admin.site.register(CustomerUser, CustomerUserAdmin )
