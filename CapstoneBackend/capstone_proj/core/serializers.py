from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.models import User
from profileuser.serializers import ProfileSerializer
from profileuser.models import Profile
from django.contrib.auth import authenticate




class UserSerializer(serializers.ModelSerializer):
    contact = serializers.CharField(source='profile.contact')
    class Meta:
        model = User
        fields = ('id','username','email','contact',)



class UserSerializerWithToken(serializers.ModelSerializer):
    
    token = serializers.SerializerMethodField()
    password = serializers.CharField(required=True, validators=[validate_password])
    repassword = serializers.CharField(write_only=True, required=True)
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    
    address = serializers.CharField(source='profile.home_address')
    contact = serializers.IntegerField(source='profile.contact')

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def validate(self, attrs):
        if attrs['password'] != attrs['repassword']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self,validated_data):
        password = validated_data.pop('password', None)
        # instance = self.Meta.model(**validated_data)
        instance = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email']          
        )
        if password is not None:
             instance.set_password(password)
        instance.save()

        Profile.objects.create(
                user_id= instance.id,
                home_address= validated_data['profile']['home_address'],
                contact = validated_data['profile']['contact'],
        )
        instance.profile.save()
        return instance

    class Meta:
         model = User
         fields = ('token', 'username', 'password','repassword','email','address','contact')



# class ProfileSerializerToken(serializers.ModelSerializer):
    
#     def update(self,instance, validated_data):
#         contact = validated_data.pop('contact',None)
#         home_address = validated_data.pop('address',None)
#         username = self.data['user']['username']
#         user = User.objects.get(username=username)
#         print(user)

    
#     class Meta:
#         model=Profile
#         fields = "home_address','contact"
    
    
    
