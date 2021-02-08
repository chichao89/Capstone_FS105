from django.db import models
from django.contrib.auth.models import User
from booking.models import Booking
from role.models import Role

# Create your models here.
class Profile(models.Model):
   user = models.OneToOneField(User, on_delete=models.CASCADE)
   role = models.ForeignKey(Role, on_delete=models.CASCADE, blank=True, null=True)
   booking = models.ForeignKey(Booking, on_delete=models.CASCADE, blank=True, null=True)
   home_address = models.CharField(verbose_name="Home Address", max_length=300)
   contact = models.BigIntegerField(verbose_name="Contact No")

   def __str__(self):
      return (str(self.user))

   class Meta:
      db_table = "profileuser"