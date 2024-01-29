from django.core.validators import MinValueValidator, MaxValueValidator
import json
from django import forms
from django.db import models


class Instiute(models.Model):
    ENTITY_CHOICES = [
        ("SCHOOL", "School"),
        ("COLLEGE", "College"),
        ("HOSTEL", "Hostel"),
    ]
    COURSES_CHOICES = [
        ("Bcom", "Bcom"),
        ("BBA", "BBA"),
        ("BCA", "BCA"),
    ]
    institute_name  = models.CharField(max_length=40, unique=True)
    institute_type = models.CharField(max_length=30, choices=ENTITY_CHOICES)
    courses_provided = models.JSONField(default=list, blank=True, choices = COURSES_CHOICES)
    
    def __str__(self):
        return self.institute_name

    def set_courses_provided(self, values):
        self.courses_provided = json.dumps(values)

    def get_courses_provided(self):
        return json.loads(self.courses_provided)


class Student(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
    ]
    COURSES_CHOICES = [
        ("Bcom", "Bcom"),
        ("BBA", "BBA"),
        ("BCA", "BCA"),
    ]
    ENTITY_CHOICES = [
        ("SCHOOL", "School"),
        ("COLLEGE", "College"),
        ("HOSTEL", "Hostel"),
    ]
    def get_institute_type(self):
        if self.Instiute:
            return self.Instiute.institute_type
        return None

    name = models.CharField(max_length=100)
    institute = models.ForeignKey(Instiute, on_delete=models.SET_NULL, null=True)
    division = models.CharField(max_length=5, blank=False, default="A")
    course = models.CharField(max_length=100, default=list, blank=False, choices = COURSES_CHOICES)
    father_name = models.CharField(max_length=100)
    study_sem = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(8)], default=1)
    student_id = models.BigAutoField(unique=True, primary_key=True)
    phone_number = models.CharField(max_length=15)
    parent_number = models.CharField(max_length=15)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    email = models.EmailField()
    fees_paid = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    fees_unpaid = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    address = models.TextField()
    city = models.CharField(max_length=50, null=False, default="")
    state = models.CharField(max_length=50, null=False, default="")
    pincode = models.CharField(max_length=50, null=False, default="")

    @property
    def institute_type(self):
        if self.institute:
            return self.institute.institute_type
        return None

    def set_courses_provided(self, value):
        self.courses_provided = json.dumps(value)

    def get_courses_provided(self):
        return json.loads(self.courses_provided)
    
    def __str__(self):
        return self.name    