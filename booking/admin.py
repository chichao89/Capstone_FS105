from django.contrib import admin
from .models import Booking

# Register your models here.

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    # list_display = ('booking_ID','user','get_email','get_contact','service','product','price','date','time')
    list_display = ('booking_ID','user','get_email','get_contact','service','price','date','time')
    list_select_related = ('user', )

    
    def get_email(self, instance):
        return instance.user.email
    get_email.short_description = 'Email'

    def get_contact(self, instance):
        return instance.user.profile.contact
    get_contact.short_description = 'Mobile Number'

    def get_inline_instances(self, request, obj=None):
        if not obj:
            return list()
        return super(BookingAdmin, self).get_inline_instances(request, obj)