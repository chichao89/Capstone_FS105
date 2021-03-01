from django.shortcuts import render
from rest_framework import viewsets
from .models import Slots
from .serializers import SlotsSerializer
from rest_framework.permissions import IsAuthenticated
from datetime import datetime   
# Create your views here.

class SlotsViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
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


