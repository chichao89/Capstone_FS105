from django.db import models

# Create your models here.

class Slots(models.Model):
    slots_ID = models.AutoField(verbose_name="Slots ID", primary_key = True) 
    time_slot = models.TimeField(verbose_name="Time Slot")

    def __str__(self):
        return str(self.time_slot)

    class Meta:
      db_table = "slots"