from django.contrib import admin
from django.urls import path
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from products.views import CategoryViewSet, BrandViewSet, ProductViewSet
from sitesettings.views import FooterListViewSet, SliderViewSet, AboutViewSet, SocialMediaViewSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = routers.DefaultRouter()
router.register('api/category/select', CategoryViewSet)
router.register('api/brand/select', BrandViewSet)
router.register('api/product/select', ProductViewSet)
router.register('api/sitesettings/footer/select',FooterListViewSet )
router.register('api/sitesettings/slider/select',SliderViewSet )
router.register('api/sitesettings/about/select',AboutViewSet )
router.register('api/sitesettings/social/select',SocialMediaViewSet )


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]+router.urls

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)