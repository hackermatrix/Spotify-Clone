from rest_framework.serializers import ModelSerializer
from logic.models import User ,Song, Playlist
from rest_framework import serializers

class UserSerializer(ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ["email" , "username" ,"first_name" , "last_name" , "password"]

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user
    
class SongSerializer(ModelSerializer):
    artist_info = serializers.SerializerMethodField()
    class Meta:
        model = Song
        fields = "__all__"

    def get_artist_info(self,obj):
        return {"username":obj.artist.username,"first_name":obj.artist.first_name,"last_name":obj.artist.last_name}
    

class PlaylistSerializer(ModelSerializer):
    songs = SongSerializer(many=True)
    class Meta:
        model = Playlist
        fields = "__all__"

class AddSongtoPlaylist(ModelSerializer):
    class Meta:
        model = Playlist
        fields = "__all__"