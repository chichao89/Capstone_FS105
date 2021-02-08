from django.db import models

# Create your models here.
class Testimonial(models.Model):
   testimonial_ID = models.AutoField(verbose_name="Testimonial ID", primary_key=True)
   image = models.ForeignKey(to='imageFiles.ImageFiles', on_delete=models.SET_NULL, blank=True, null=True)

   def __str__(self):
        return (str(self.testimonial_ID))+" - "+(str(self.image))

   class Meta:
      db_table = "testimonial"
