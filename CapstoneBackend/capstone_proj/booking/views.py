from django.shortcuts import render
from rest_framework import viewsets
from .models import Booking
from .serializers import BookingSerializer
from .permissions import ReadOnly
# Create your views here.

class BookingViewSet(viewsets.ModelViewSet):
    #queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    def get_queryset(self):
        user_id = self.request.user.id
        if self.request.user.is_superuser:
            return Booking.objects.all()
        else:
            return Booking.objects.filter(user_id=user_id)
    permission_classes = (ReadOnly,)
    # permission_classes = (IsAuthenticated)