from django.shortcuts import render
from rest_framework import viewsets
from .models import ServiceNail
from .serializers import ServiceNailSerializer
from rest_framework.permissions import AllowAny
# Create your views here.

class ServiceNailViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = ServiceNail.objects.all()
    serializer_class = ServiceNailSerializer
# Create your views here.