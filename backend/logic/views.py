from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from logic.serializers import *
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken
from rest_framework import mixins
from rest_framework.generics import GenericAPIView
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Song
from rest_framework.decorators import action


class RegisterUserView(APIView):
    """View for registering Users"""

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        instance = serializer.save()

        access_token = AccessToken.for_user(instance)
        refresh_token = RefreshToken.for_user(instance)
        res = {"access": str(access_token), "refresh": str(refresh_token)}
        return Response(res)


class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = SongSerializer

    def create(self, request):
        data = request.data
        data["artist"] = request.user.id
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    # Get all songs created by the current user
    @action(detail=False, methods=["GET"], url_path="my")
    def get_user_songs(self, request):
        user_id = request.user.id
        self.queryset = Song.objects.select_related("artist").filter(artist=user_id)
        return self.list(request)

    # Get songs by artist id
    @action(detail=False, methods=["GET"], url_path=r"byArtist/(?P<artist_id>\d+)")
    def get_song_by_artist(self, request, artist_id):
        self.queryset = Song.objects.filter(artist=artist_id)
        return self.list(request)

    # Get song by name
    @action(detail=False, methods=["GET"], url_path="byName")
    def get_song_by_name(self, request):
        song_name = request.query_params.get("name")
        self.queryset = Song.objects.filter(name=song_name)
        return self.list(request)


class PlaylistViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = PlaylistSerializer
    queryset = Playlist.objects.all()
    lookup_field = "id"

    def create(self, request):
        data = request.data
        data["owner"] = request.user.id
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    @action(detail=False,methods=["GET"],url_path="my")
    def get_my_playlists(self,request):
        user = request.user
        self.queryset = Playlist.objects.select_related("owner").filter(owner=user)
        return self.list(request)
    
    @action(detail=False,methods=["POST"],url_path="add/song")
    def add_song_to_playlist(self,request):
        data = request.data
        instance = Playlist.objects.get(id=data["id"])
        serializer = AddSongtoPlaylist(instance)
        songs = serializer.data["songs"]
        if(data["song"] not in songs):
            songs.append(data["song"])
            serializer = AddSongtoPlaylist(instance,data={"songs":songs},partial=True)
            k = serializer.is_valid(raise_exception=True)
            serializer.save()
            # print(serializer.data)
            return Response(serializer.data)
        else:
            return Response({"msg":"Song already in playlist"})


