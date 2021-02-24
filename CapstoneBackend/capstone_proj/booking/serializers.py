from rest_framework import serializers
from .models import Booking
from core.serializers import UserSerializer
from django.contrib.auth.models import User
from serviceNail.models import ServiceNail
from slots.models import Slots
from djmoney.contrib.django_rest_framework import MoneyField

class BookingSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField()
    service = serializers.CharField()
    price = MoneyField(max_digits=14, decimal_places=2)
    date = serializers.DateField()
    time = serializers.CharField()
       
    def create(self, validated_data):
        # instance = self.Meta.model(**validated_data)
        print(validated_data)
        user = User.objects.get(id=validated_data['user_id'])
        service = ServiceNail.objects.get(service_ID=validated_data['service'])
        time = Slots.objects.get(slots_ID=validated_data['time'])

        time.is_booked = True
        time.save()

        instance = Booking.objects.create(     
            user = user,
            price = validated_data['price'],
            date = validated_data['date'],
            service = service,
            time = time
        )
        instance.save()
        return instance
   
    #     return category  
    class Meta:
        model=Booking
        fields = ('user_id','service','price','date','time')
    


