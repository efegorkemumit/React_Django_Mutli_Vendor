from django.db import models
from autoslug import AutoSlugField
from .valid import valid_image_exstension, valid_size
from adminsections.models import CustomerUser
from customers.models import CustomerUserProfile

def category_image_path(instance, filename):
    return f"category/{instance.id}/server/{filename}"

class Category(models.Model):
    title = models.CharField(max_length=100)
    slug = AutoSlugField(populate_from='title')
    photo = models.ImageField(
        upload_to=category_image_path,
        null=True,
        blank=True,
        validators={valid_image_exstension}
        
    )

    def __str__(self):
        return self.title

class Brand(models.Model):
    title = models.CharField(max_length=100)
    slug = AutoSlugField(populate_from='title')

    def __str__(self):
        return self.title

class Product(models.Model):
    title = models.CharField(max_length=100)
    slug = AutoSlugField(populate_from='title')
    description = models.TextField()
    discount = models.DecimalField(max_digits=10, decimal_places=2)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    avaible = models.BooleanField(default=True)
    is_new = models.BooleanField(default=True)
    is_top = models.BooleanField(default=False)
    rating = models.DecimalField(max_digits=10, decimal_places=2)
    countInStock = models.IntegerField(null=True, blank=True)
    SIZE_CHOICE = ( 
        ("xs", "XS"),
        ("s", "S"),
        ("m", "M"),
        ("l", "L"),
        ("xl", "XL"),
        )
    size = models.CharField(max_length=10, choices=SIZE_CHOICE, null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    brandid = models.ForeignKey(Brand, on_delete=models.CASCADE)
    created_by = models.ForeignKey(CustomerUser, on_delete=models.CASCADE)
    whislist = models.ManyToManyField(CustomerUserProfile)

    def __str__(self):
        return self.title


   #### python manage.py migrate --run-syncdb
   # python manage.py migrate --fake
   #  python manage.py  makemigrations products