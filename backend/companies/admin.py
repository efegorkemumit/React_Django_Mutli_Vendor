from django.contrib import admin
from .models import CompanyUser

class CompanyUserAdmin(admin.ModelAdmin):
    pass
    # başka özellik eklemek istiyorsan burdan ekle

admin.site.register(CompanyUser, CompanyUserAdmin )
