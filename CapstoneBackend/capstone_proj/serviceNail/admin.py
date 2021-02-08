from django.contrib import admin
from .models import ServiceNail
# Register your models here.
@admin.register(ServiceNail)
class ServiceNailAdmin(admin.ModelAdmin):
    list_display = ('service_ID','image','service_type','service_description','price',)