from django.shortcuts import render
from rest_framework import viewsets
from .models import Promotion
from .serializers import PromotionSerializer
from rest_framework.permissions import AllowAny
# Create your views here.

class PromotionViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Promotion.objects.all()
    serializer_class = PromotionSerializer
# Create your views here.

