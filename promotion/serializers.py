from rest_framework import serializers
from .models import Promotion
from serviceNail.models import ServiceNail
from imageFiles.serializers import ImageFilesSerializer

class PromotionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Promotion
        fields = "__all__"

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['image'] = ImageFilesSerializer(instance.image).data['Image_URL']
        return rep
