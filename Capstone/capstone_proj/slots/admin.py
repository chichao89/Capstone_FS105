from django.contrib import admin
from .models import Slots
# Register your models here.

@admin.register(Slots)
class SlotsAdmin(admin.ModelAdmin):
    list_display = ('slots_ID','time_slot','date','is_booked')