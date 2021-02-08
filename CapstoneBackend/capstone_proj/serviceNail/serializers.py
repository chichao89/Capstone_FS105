from rest_framework import serializers
from .models import ServiceNail

class ServiceNailSerializer(serializers.ModelSerializer):
    class Meta:
        model=ServiceNail
        fields = "__all__"