from django.shortcuts import render
from rest_framework import viewsets
from .models import Slots
from .serializers import SlotsSerializer
from rest_framework.permissions import IsAuthenticated,IsAuthenticatedOrReadOnly
from datetime import datetime   
# Create your views here.
from rest_framework.permissions import AllowAny
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os
from rest_framework.decorators import action, permission_classes

class SlotsViewSet(viewsets.ModelViewSet):
  
    # queryset = Slots.objects.all()
    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        date = self.request.query_params.get('date', None)
        queryset = Slots.objects.filter(date__exact=date)
        return queryset
    serializer_class = SlotsSerializer

# Add this CBV
# class Assets(View):

#     def get(self, _request, filename):
#         path = os.path.join(os.path.dirname(__file__), 'static', filename)

#         if os.path.isfile(path):
#             with open(path, 'rb') as file:
#                 return HttpResponse(file.read(), content_type='application/javascript')
#         else:
#             return HttpResponseNotFound()