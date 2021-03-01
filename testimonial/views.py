from django.shortcuts import render
from rest_framework import viewsets
from .models import Testimonial
from .serializers import TestimonialSerializer
from rest_framework.permissions import AllowAny
# Create your views here.

class TestimonialViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer