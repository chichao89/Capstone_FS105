from rest_framework import serializers
from .models import Booking
from core.serializers import UserSerializer
from django.contrib.auth.models import User
from serviceNail.models import ServiceNail
from slots.models import Slots
from profileuser.models import Profile
from djmoney.contrib.django_rest_framework import MoneyField
from django.core.mail import send_mail
from django.conf import settings
    

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
        profile = Profile.objects.get(user=user)
        #print(user)
        #print(profile.home_address)
        # print(profile.contact)
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

        subject = 'iNailForFung Booking Confirmation'
        message = ('Thank you for choosing iNailForFung Services. I am pleased to confirm your booking as below:\n\n'
                   +'Username:' + str(user) +'\n'
                   +'Price:' +  str(validated_data['price'])+'\n'
                   +'Date of Booking:' + str(validated_data['date'])+'\n'
                   +'Service Type:' + str(service)+'\n'
                   +'Time Booked:' + str(time)+'\n'
                   +'Email:' + str(user.email)+'\n'
                   +'Contact:'+ str(profile.contact)+'\n\n'
                   +'If you have to change or cancel your booking, please DM me at my instagram profile via the social media links in the website.')
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [user.email,]
        send_mail( subject, message, email_from, recipient_list )
        return instance
   
    #     return category  
    class Meta:
        model=Booking
        fields = ('user_id','service','price','date','time')
    


