# Generated by Django 3.1.4 on 2021-02-07 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('testimonial', '0005_auto_20210208_0015'),
    ]

    operations = [
        migrations.AlterField(
            model_name='testimonial',
            name='testimonial_ID',
            field=models.IntegerField(primary_key=True, serialize=False, verbose_name='Testimonial ID'),
        ),
    ]
