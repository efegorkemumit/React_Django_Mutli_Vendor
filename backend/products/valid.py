import os
from PIL import Image
from django.core.exceptions import ValidationError

def valid_image_exstension(value):
    ext = os.path.splitext(value.name)[1]
    valid_extension = ['.jpg', '.png','.jpeg', '.gif']
    if not ext.lower() in valid_extension:
        raise ValidationError(
            f"Unsupported file"
        )

def valid_size(image):
    if image: 
        with Image.open(image) as img:
            if img.width> 70 or img.height>70:
                  raise ValidationError(
                   f"The maximum allowed size 70x70"
                  )