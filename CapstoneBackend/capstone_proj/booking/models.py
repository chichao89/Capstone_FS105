from djmoney.models.fields import MoneyField
from django.db import models
from serviceNail.models import ServiceNail
from product.models import Product
from slots.models import Slots
from django.contrib.auth.models import User

# Create your models here.
class Booking(models.Model):
    booking_ID = models.AutoField(verbose_name="Booking ID", primary_key = True)
    user = models.ForeignKey(User, on_delete=models.CASCADE,blank=True, null=True)
    service = models.ForeignKey(ServiceNail, on_delete=models.CASCADE,blank=True, null=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE,blank=True, null=True)
    price = MoneyField(verbose_name="Price", max_digits=14, decimal_places=2  ,default_currency='SGD')
    date = models.DateField(verbose_name ="Date of Booking")
    time = models.ForeignKey(Slots, verbose_name = "Time of Booking", on_delete=models.CASCADE,blank=True, null=True)

    def __str__(self):
        return str(self.booking_ID) + str(self.user)

    class Meta:
      db_table = "booking" 
