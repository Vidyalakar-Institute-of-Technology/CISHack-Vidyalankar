from django.contrib import admin
from .models import prescription,personal
# Register your models here.
@admin.register(prescription)
class prespost(admin.ModelAdmin):
    list_display = ['id','title','desc','user']
@admin.register(personal)
class prespost(admin.ModelAdmin):
    list_display = ['user','fullname','age','email','phone','dob','blood','allergy','other','address']
