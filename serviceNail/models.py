from django.db import models
from djmoney.models.fields import MoneyField
# Create your models here.
class ServiceNail(models.Model):
   service_ID = models.AutoField(verbose_name="Service ID", primary_key=True)
   image = models.ForeignKey(to='imageFiles.ImageFiles', on_delete=models.CASCADE,blank=True, null=True)
   service_type = models.CharField(verbose_name="Service Type", max_length=30)
   service_description = models.TextField(verbose_name="Service Description", max_length=500)
   price = MoneyField(verbose_name="Price", max_digits=14, decimal_places=2  ,default_currency='SGD')
   discount_price = MoneyField(verbose_name="Discount Price",max_digits=14, decimal_places=2  ,default_currency='SGD', blank=True, null=True)
   duration =models.CharField(verbose_name="Duration", blank=True, null=True, max_length=10)

   def __str__(self):
      return (str(self.service_ID))+" - "+(str(self.service_type))

   class Meta:
      db_table = "servicenail"