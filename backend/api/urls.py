from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

router = DefaultRouter()
router.register(r'jobs', views.JobViewSet)
router.register(r'bulletins', views.BulletinViewSet)
router.register(r'skills', views.SkillViewSet)
router.register(r'roadmaps', views.RoadmapViewSet)
router.register(r'toolkit/templates', views.ResumeTemplateViewSet)
router.register(r'toolkit/prompts', views.PromptViewSet)
router.register(r'toolkit/linkedin', views.LinkedInFieldViewSet)
router.register(r'flysky/countries', views.CountryViewSet)
router.register(r'flysky/universities', views.UniversityViewSet)
router.register(r'flysky/internships', views.InternshipViewSet)

urlpatterns = [
    # Auth
    path('auth/register/', views.register_view, name='register'),
    path('auth/login/', views.login_view, name='login'),
    path('auth/admin-login/', views.admin_login_view, name='admin-login'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('auth/me/', views.me_view, name='me'),

    # Resources
    path('', include(router.urls)),
]
