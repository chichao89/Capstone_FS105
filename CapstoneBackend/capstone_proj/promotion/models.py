from django.db import models
from serviceNail.models import ServiceNail
from product.models import Product


# Create your models here.
class Promotion(models.Model):
   Promotion_ID = models.AutoField(verbose_name="Promotion ID", primary_key = True)
   service = models.ForeignKey(ServiceNail, on_delete=models.CASCADE,blank=True, null=True)
   product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True)
   promo_type = models.CharField(verbose_name="Promotion Type", max_length=300)
   promo_description = models.CharField(verbose_name="Promotion Description", max_length=500)
   promo_start = models.DateTimeField(verbose_name="Promotion Start")
   promo_end = models.DateTimeField(verbose_name="Promotion End")

   def __str__(self):
      return (str(self.Promotion_ID))+" - "+(self.promo_type)

   class Meta:
      db_table = "promotion"