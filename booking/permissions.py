from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS, DjangoModelPermissions

class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        else:
            return request.user.is_staff