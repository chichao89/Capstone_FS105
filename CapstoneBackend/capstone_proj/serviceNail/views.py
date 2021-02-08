from django.shortcuts import render
from rest_framework import viewsets
from .models import ServiceNail
from .serializers import ServiceNailSerializer
# Create your views here.

class ServiceNailViewSet(viewsets.ModelViewSet):
    queryset = ServiceNail.objects.all()
    serializer_class = ServiceNailSerializer
# Create your views here.