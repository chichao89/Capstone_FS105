from django.shortcuts import render
from rest_framework import viewsets
from .models import Slots
from .serializers import SlotsSerializer
# Create your views here.

class SlotsViewSet(viewsets.ModelViewSet):
    queryset = Slots.objects.all()
    serializer_class = SlotsSerializer
