from django.db import models

# Create your models here.
class Role(models.Model):
   role_ID = models.AutoField(verbose_name="Role ID", primary_key = True)
   role_description = models.CharField(verbose_name="Role Description", max_length=100)

   def __str__(self):
      return (str(self.role_ID))+" - "+(self.role_description)

   class Meta:
      db_table = "role"