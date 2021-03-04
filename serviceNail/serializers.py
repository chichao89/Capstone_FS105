from rest_framework import serializers
from .models import ServiceNail
from imageFiles.serializers import ImageFilesSerializer


class ServiceNailSerializer(serializers.ModelSerializer):
    # image = serializers.StringRelatedField()

    class Meta:
        model=ServiceNail
        fields = "__all__"
    
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['image'] = ImageFilesSerializer(instance.image).data['Image_URL']
        return rep

