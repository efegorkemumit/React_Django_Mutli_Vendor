# Generated by Django 4.2.6 on 2023-10-11 09:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_category_icon'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='icon',
        ),
    ]
