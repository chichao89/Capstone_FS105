from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from booking.models import Booking
from role.models import Role

# Create your models here.
class Profile(models.Model):
   user = models.OneToOneField(User, on_delete=models.CASCADE)
   role = models.ForeignKey(Role, on_delete=models.CASCADE, blank=True, null=True)
   booking = models.ForeignKey(Booking, on_delete=models.CASCADE, blank=True, null=True)
   home_address = models.CharField(verbose_name="Home Address", max_length=300,blank=True, default=None)
   contact = models.BigIntegerField(verbose_name="Contact No",blank=True, default=None)

   def __str__(self):
      return (str(self.user))

   class Meta:
      db_table = "profileuser"

# @receiver(post_save, sender=User)
# def create_or_update_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)
#     instance.profile.save()
   
   # def create_profile(sender, **kwargs):
   #  user = kwargs["instance"]
   #  if kwargs["created"]:
   #      user_profile = Profile(user=user)
   #      user_profile.save()
   # post_save.connect(create_profile, sender=User)