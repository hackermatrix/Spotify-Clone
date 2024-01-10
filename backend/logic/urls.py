from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from logic.views import RegisterUserView, SongViewSet, PlaylistViewSet
from rest_framework.routers import SimpleRouter

router = SimpleRouter(trailing_slash=False)
router.register(r"song", SongViewSet)
router.register(r"playlist", PlaylistViewSet)

urlpatterns = [
    path("api/",include(router.urls)),
    path("api/login", TokenObtainPairView.as_view(), name="Get the token after login"),
    path("api/login/refresh", TokenRefreshView.as_view(), name="Refresh the access token"),
    path("api/register", RegisterUserView.as_view(), name = "register new user" ),
] 