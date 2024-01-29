from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("paymentlogin/", views.paymentlogin, name="paymentlogin"),
    path("addstudent/", views.add_student, name="add_student"),
    path("find-student/", views.findstudents, name="find_student"),
    path("uploadxls/", views.import_from_excel, name="import_from_excel"),
]