from django.db import models
from cloudinary.models import CloudinaryField


class Footer(models.Model):
    title= models.CharField(max_length=100)
    urllink = models.CharField(max_length=300)
    FOOTER_CHOICE = ( 
        ("one", "ONE"),
        ("two", "TWO"),
        ("there", "THREE"),
        ("four", "FOUR"),
        )
    footercolumuns = models.CharField(max_length=10, choices=FOOTER_CHOICE, null=True, blank=True)
    def __str__(self):
        return self.title

class SocialMedia(models.Model):
     icon= models.CharField(max_length=200,
     verbose_name="Font Awesome icon", 
     help_text="Font Awesome sitesinden alabilirsin icon örnek kullanım : fa-regular fa-circle-xmark   fa-solid fa-circle-xmark",
     blank=True,
     null=True
     
     )
     urllink = models.CharField(max_length=300)

     def __str__(self):
        return self.icon

class About(models.Model):
    smalldesc = models.CharField(max_length=500)
    description = models.TextField()

    def __str__(self):
        return self.smalldesc

class Slider(models.Model):
    textone = models.CharField(max_length=200)
    texttwo = models.CharField(max_length=200)
    urlslider = models.CharField(max_length=300)
    image = CloudinaryField('image')

    def __str__(self):
        return self.textone