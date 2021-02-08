from django.contrib import admin
from .models import Role
# Register your models here.
@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    list_display = ('role_ID','role_description',)