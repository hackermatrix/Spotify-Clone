# Generated by Django 4.1.13 on 2023-12-25 12:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("logic", "0003_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="subscribedArtists",
            field=models.ManyToManyField(
                related_name="subscribers", to=settings.AUTH_USER_MODEL
            ),
        ),
        migrations.CreateModel(
            name="Song",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("thumbnail", models.URLField()),
                ("track", models.CharField(max_length=255)),
                (
                    "artist",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="songs",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Playlist",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("thumbnail", models.URLField()),
                (
                    "collaborators",
                    models.ManyToManyField(
                        related_name="collaborator_playlists",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "owner",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="playlists",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "songs",
                    models.ManyToManyField(related_name="playlists", to="logic.song"),
                ),
            ],
        ),
        migrations.AddField(
            model_name="user",
            name="likedPlaylists",
            field=models.ManyToManyField(
                related_name="liked_users", to="logic.playlist"
            ),
        ),
        migrations.AddField(
            model_name="user",
            name="likedSongs",
            field=models.ManyToManyField(related_name="liked_users", to="logic.song"),
        ),
    ]