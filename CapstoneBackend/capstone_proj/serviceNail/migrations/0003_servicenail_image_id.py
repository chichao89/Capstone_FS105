# Generated by Django 3.1.4 on 2021-02-07 15:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('imageFiles', '0002_auto_20210207_2334'),
        ('serviceNail', '0002_remove_servicenail_image_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicenail',
            name='image_ID',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='imageFiles.imagefiles'),
        ),
    ]
