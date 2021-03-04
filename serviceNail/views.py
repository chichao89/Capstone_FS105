from django.shortcuts import render
from rest_framework import viewsets
from .models import ServiceNail
from .serializers import ServiceNailSerializer
from rest_framework.permissions import AllowAny 
# Create your views here.
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

class ServiceNailViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = ServiceNail.objects.all()
    serializer_class = ServiceNailSerializer
# Create your views here.

# Add this CBV
# class Assets(View):

#     def get(self, _request, filename):
#         path = os.path.join(os.path.dirname(__file__), 'static', filename)

#         if os.path.isfile(path):
#             with open(path, 'rb') as file:
#                 return HttpResponse(file.read(), content_type='application/javascript')
#         else:
#             return HttpResponseNotFound()