from django.db import models
from autoslug import AutoSlugField


def category_image_path(instance, filename):
    return f"category/{instance.id}/server/{filename}"

class Category(models.Model):
    title = models.CharField(max_length=100)
    slug = AutoSlugField(populate_from='title')
    photo = models.ImageField(
        upload_to=category_image_path,
        null=True,
        blank=True,
        
    )

    def __str__(self):
        return self.title
