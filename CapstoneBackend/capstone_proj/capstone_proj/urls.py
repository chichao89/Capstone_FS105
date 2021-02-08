"""capstone_proj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from booking import views as booking_views
from imageFiles import views as image_views
from product import views as product_views
from profileuser import views as profile_views
from promotion import views as promotion_views
from role import views as role_views
from serviceNail import views as serviceNail_views
from testimonial import views as testimonial_views

router = routers.DefaultRouter()
router.register(r'BookingAPI', booking_views.BookingViewSet)
router.register(r'ImageFilesAPI', image_views.ImageFilesViewSet)
router.register(r'ProductAPI', product_views.ProductViewSet)
router.register(r'ProfileAPI', profile_views.ProfileViewSet)
router.register(r'PromotionAPI',promotion_views.PromotionViewSet)
router.register(r'RoleAPI', role_views.RoleViewSet )
router.register(r'ServiceNailAPI', serviceNail_views.ServiceNailViewSet )
router.register(r'TestimonialAPI', testimonial_views.TestimonialViewSet )


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]