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
from django.urls import path, include, re_path
from rest_framework import routers
from imageFiles import views as image_views
from product import views as product_views
from profileuser import views as profile_views
from promotion import views as promotion_views
from role import views as role_views
from serviceNail import views as serviceNail_views
from testimonial import views as testimonial_views
from slots import views as slots_views
from rest_framework_jwt.views import obtain_jwt_token
from django.views.generic import TemplateView


router = routers.DefaultRouter()
router.register(r'ImageFilesAPI', image_views.ImageFilesViewSet)
router.register(r'ProductAPI', product_views.ProductViewSet)
router.register(r'ProfileAPI', profile_views.ProfileViewSet)
router.register(r'PromotionAPI',promotion_views.PromotionViewSet, 'Promotion')
router.register(r'RoleAPI', role_views.RoleViewSet )
router.register(r'ServiceNailAPI', serviceNail_views.ServiceNailViewSet )
router.register(r'TestimonialAPI', testimonial_views.TestimonialViewSet )
router.register(r'SlotsAPI', slots_views.SlotsViewSet, 'Slots')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('token-auth/', obtain_jwt_token),
    path('core/', include('core.urls')),
    path('booking/',include('booking.urls')),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
    # path('SlotsAPI/',include('slots.urls'))
]
