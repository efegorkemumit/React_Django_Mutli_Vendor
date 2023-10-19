from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.conf import settings

customer_setting = settings.CUSTOMER_SETTING

class CustomerUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email alanı zorunlu.')
        email= self.normalize_email(email)
        user= self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using = self.db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self.create_user(email,password, **extra_fields)

class CustomerUserProfile(AbstractBaseUser):
    email = models.EmailField(unique=True)
    address = models.TextField()
    phone_number = models.CharField(max_length=15)
    full_name = models.CharField(max_length=255)
    objects = CustomerUserManager()
    is_active = models.BooleanField(default=True)


    USERNAME_FIELD ='email'

    def __str__(self):
        return self.email

