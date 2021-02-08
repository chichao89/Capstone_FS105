from django.shortcuts import render
from rest_framework import viewsets
from .models import Testimonial
from .serializers import TestimonialSerializer
# Create your views here.

class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer