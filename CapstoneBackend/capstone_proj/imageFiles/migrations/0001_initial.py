# Generated by Django 3.1.4 on 2021-02-07 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ImageFiles',
            fields=[
                ('Image_ID', models.AutoField(primary_key=True, serialize=False, verbose_name='Image ID')),
                ('Image_For', models.CharField(max_length=30, verbose_name='Image For')),
                ('Image_URL', models.CharField(max_length=200, verbose_name='Image URL')),
            ],
        ),
    ]
