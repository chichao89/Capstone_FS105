from django.shortcuts import render
from rest_framework import viewsets
from .models import Booking
from .serializers import BookingSerializer
# Create your views here.

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    # permission_classes = (IsAuthenticated)