from django.shortcuts import render
from rest_framework import viewsets
from .models import ImageFiles
from .serializers import ImageFilesSerializer
# Create your views here.

class ImageFilesViewSet(viewsets.ModelViewSet):
    queryset = ImageFiles.objects.all()
    serializer_class = ImageFilesSerializer

# Create your views here.
