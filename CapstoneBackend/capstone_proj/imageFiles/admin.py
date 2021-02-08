from django.contrib import admin
from .models import ImageFiles
# Register your models here.
@admin.register(ImageFiles)
class ImageFilesAdmin(admin.ModelAdmin):
    list_display = ('Image_ID','service','product_ID','testimonial_ID','Image_For','Image_URL')