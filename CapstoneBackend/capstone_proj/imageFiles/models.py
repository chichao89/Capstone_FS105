from django.db import models
from serviceNail.models import ServiceNail
from product.models import Product
from testimonial.models import Testimonial
from promotion.models import Promotion

# Create your models here.
class ImageFiles(models.Model):
    Image_ID = models.AutoField(verbose_name="Image ID", primary_key = True)
    service_ID = models.ForeignKey(ServiceNail, on_delete=models.SET_NULL, null=True, blank=True)
    product_ID = models.ForeignKey(Product, on_delete=models.SET_NULL,null=True, blank=True)
    testimonial_ID = models.ForeignKey(Testimonial, on_delete=models.SET_NULL,null=True, blank=True)
    Promotion_ID = models.ForeignKey(Promotion, on_delete=models.SET_NULL,null=True, blank=True)

    Image_URL = models.CharField(verbose_name="Image URL", max_length=200)

    def __str__(self):
      return self.Image_URL
    
    class Meta:
      db_table = "imagefiles"
      verbose_name_plural = 'ImageFiles'