from rest_framework import serializers
from .models import Testimonial
from imageFiles.serializers import ImageFilesSerializer

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model=Testimonial
        fields = "__all__"

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['image'] = ImageFilesSerializer(instance.image).data['Image_URL']
        return rep