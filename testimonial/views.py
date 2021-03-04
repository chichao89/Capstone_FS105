from django.shortcuts import render
from rest_framework import viewsets
from .models import Testimonial
from .serializers import TestimonialSerializer
from rest_framework.permissions import AllowAny
# Create your views here.
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

class TestimonialViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

# Add this CBV
class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()