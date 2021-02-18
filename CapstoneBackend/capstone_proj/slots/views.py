from django.shortcuts import render
from rest_framework import viewsets
from .models import Slots
from .serializers import SlotsSerializer
from rest_framework.permissions import IsAuthenticated
# Create your views here.

class SlotsViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Slots.objects.all()
    serializer_class = SlotsSerializer


