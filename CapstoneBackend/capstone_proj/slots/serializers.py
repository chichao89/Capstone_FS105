from rest_framework import serializers
from .models import Slots

class SlotsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Slots
        fields = "__all__"