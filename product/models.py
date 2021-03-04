from django.db import models
from djmoney.models.fields import MoneyField

# Create your models here.
class Product(models.Model):
    product_ID = models.AutoField(verbose_name="Product ID", primary_key = True)
    image = models.ForeignKey(to='imageFiles.ImageFiles', on_delete=models.SET_NULL, blank=True, null=True)
    product_type = models.CharField(verbose_name="Product Type", max_length=100)
    description = models.TextField(verbose_name ="Description", max_length=500)
    price = MoneyField(verbose_name="Price", max_digits=14, decimal_places=2  ,default_currency='SGD')

    def __str__(self):
      return (str(self.product_ID))+" - "+(self.product_type)

    class Meta:
      db_table = "product"