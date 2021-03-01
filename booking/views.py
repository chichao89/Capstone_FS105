from django.shortcuts import render
from rest_framework import viewsets
from .models import Booking
from .serializers import BookingSerializer
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.

class BookingList(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    #queryset = Booking.objects.all()
    # serializer_class = BookingSerializer
    # def get_queryset(self):
    #     user_id = self.request.user.id
    #     if self.request.user.is_superuser:
    #         return Booking.objects.all()
    #     else:
    #         return Booking.objects.filter(user_id=user_id)
    # permission_classes = (ReadOnly,)
    # permission_classes = (IsAuthenticated)
    # Add this CBV
class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()



    