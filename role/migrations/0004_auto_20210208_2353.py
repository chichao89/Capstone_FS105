# Generated by Django 3.1.5 on 2021-02-08 15:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('role', '0003_auto_20210208_0059'),
    ]

    operations = [
        migrations.AlterField(
            model_name='role',
            name='role_ID',
            field=models.AutoField(primary_key=True, serialize=False, verbose_name='Role ID'),
        ),
        migrations.AlterField(
            model_name='role',
            name='role_description',
            field=models.CharField(max_length=100, verbose_name='Role Description'),
        ),
    ]
