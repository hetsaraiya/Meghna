# Generated by Django 4.2.5 on 2024-01-20 17:36

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0004_student_study_sem_alter_instiute_instute_type_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="student",
            name="student_id",
            field=models.BigAutoField(
                max_length=20, primary_key=True, serialize=False, unique=True
            ),
        ),
    ]
