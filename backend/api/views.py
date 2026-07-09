from rest_framework import viewsets, status, filters
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

from .models import (
    Job, Bulletin, Skill, Roadmap,
    ResumeTemplate, Prompt, LinkedInField,
    Country, University, Internship
)
from .serializers import (
    JobSerializer, BulletinSerializer, SkillSerializer, RoadmapSerializer,
    ResumeTemplateSerializer, PromptSerializer, LinkedInFieldSerializer,
    CountrySerializer, UniversitySerializer, InternshipSerializer,
    RegisterSerializer, UserSerializer
)


# ── Helpers ───────────────────────────────────────────────────────────────────

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


# ── Auth Views ────────────────────────────────────────────────────────────────

@api_view(['POST'])
@permission_classes([AllowAny])
def register_view(request):
    """Register a new regular user."""
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        tokens = get_tokens_for_user(user)
        return Response({
            'user': UserSerializer(user).data,
            'tokens': tokens,
            'message': 'Account created successfully!'
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    """Login for regular users (by email)."""
    email = request.data.get('email', '').strip().lower()
    password = request.data.get('password', '')

    # Django username = email in our setup
    user = authenticate(request, username=email, password=password)
    if user is None:
        return Response(
            {'error': 'Invalid email or password'},
            status=status.HTTP_401_UNAUTHORIZED
        )

    tokens = get_tokens_for_user(user)
    return Response({
        'user': UserSerializer(user).data,
        'tokens': tokens,
    })


@api_view(['POST'])
@permission_classes([AllowAny])
def admin_login_view(request):
    """Login for admin panel — requires staff status."""
    username = request.data.get('username', '').strip()
    password = request.data.get('password', '')

    user = authenticate(request, username=username, password=password)
    if user is None or not user.is_staff:
        return Response(
            {'error': 'Invalid admin credentials'},
            status=status.HTTP_401_UNAUTHORIZED
        )

    tokens = get_tokens_for_user(user)
    return Response({
        'user': UserSerializer(user).data,
        'tokens': tokens,
    })


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me_view(request):
    """Return the currently authenticated user's info."""
    return Response(UserSerializer(request.user).data)


# ── Resource ViewSets ─────────────────────────────────────────────────────────

class ReadPublicWriteAdminMixin:
    """
    GET (list/retrieve): open to all.
    POST/PUT/PATCH/DELETE: require authentication (admin panel uses JWT).
    """
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [AllowAny()]
        return [IsAuthenticated()]


class JobViewSet(ReadPublicWriteAdminMixin, viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'company', 'domain', 'location']


class BulletinViewSet(ReadPublicWriteAdminMixin, viewsets.ModelViewSet):
    queryset = Bulletin.objects.all()
    serializer_class = BulletinSerializer


class SkillViewSet(ReadPublicWriteAdminMixin, viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'category', 'description']


class RoadmapViewSet(ReadPublicWriteAdminMixin, viewsets.ModelViewSet):
    queryset = Roadmap.objects.all()
    serializer_class = RoadmapSerializer


class ResumeTemplateViewSet(ReadPublicWriteAdminMixin, viewsets.ModelViewSet):
    queryset = ResumeTemplate.objects.all()
    serializer_class = ResumeTemplateSerializer


class PromptViewSet(ReadPublicWriteAdminMixin, viewsets.ModelViewSet):
    queryset = Prompt.objects.all()
    serializer_class = PromptSerializer


class LinkedInFieldViewSet(ReadPublicWriteAdminMixin, viewsets.ModelViewSet):
    queryset = LinkedInField.objects.all()
    serializer_class = LinkedInFieldSerializer


class CountryViewSet(ReadPublicWriteAdminMixin, viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer


class UniversityViewSet(ReadPublicWriteAdminMixin, viewsets.ModelViewSet):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer


class InternshipViewSet(ReadPublicWriteAdminMixin, viewsets.ModelViewSet):
    queryset = Internship.objects.all()
    serializer_class = InternshipSerializer
