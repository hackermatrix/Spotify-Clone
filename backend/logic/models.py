from django.db import models
from django.contrib.auth.models import AbstractUser



class Song(models.Model):
    name = models.CharField(max_length=255, null=False)
    thumbnail = models.URLField()
    track = models.CharField(max_length=255)
    artist = models.ForeignKey("User", on_delete=models.CASCADE, related_name='songs')

class Playlist(models.Model):
    name = models.CharField(max_length=255, null=False)
    thumbnail = models.URLField()
    owner = models.ForeignKey("User", on_delete=models.CASCADE, related_name='playlists')
    songs = models.ManyToManyField('Song', related_name='playlists',blank=True,default=None)
    collaborators = models.ManyToManyField("User", related_name='collaborator_playlists',blank=True,default=None)


class User(AbstractUser):
    likedSongs = models.ManyToManyField('Song', related_name='liked_users')
    likedPlaylists = models.ManyToManyField('Playlist', related_name='liked_users')
    subscribedArtists = models.ManyToManyField('User', related_name='subscribers')

