from rest_framework import serializers
from .models import ImageFiles

class ImageFilesSerializer(serializers.ModelSerializer):
    class Meta:
        model=ImageFiles
        fields = "__all__"