# Generated by Django 3.1.4 on 2021-02-07 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Role',
            fields=[
                ('role_ID', models.AutoField(primary_key=True, serialize=False, verbose_name='Role ID')),
                ('role_description', models.CharField(max_length=30, verbose_name='Role Description')),
            ],
        ),
    ]