from django.contrib import admin
from .models import Promotion
# Register your models here.
@admin.register(Promotion)
class PromotionAdmin(admin.ModelAdmin):
    list_display = ('Promotion_ID','service','product','promo_type','promo_description','promo_start','promo_end', 'discount_amt', 'active')