from django.urls import path
from .views import  BookingList

urlpatterns = [
    path('Booking/', BookingList.as_view())
]