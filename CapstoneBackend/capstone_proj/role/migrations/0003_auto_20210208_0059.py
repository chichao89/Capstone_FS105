# Generated by Django 3.1.4 on 2021-02-07 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('role', '0002_auto_20210208_0020'),
    ]

    operations = [
        migrations.AlterField(
            model_name='role',
            name='role_ID',
            field=models.IntegerField(primary_key=True, serialize=False, verbose_name='Role ID'),
        ),
    ]