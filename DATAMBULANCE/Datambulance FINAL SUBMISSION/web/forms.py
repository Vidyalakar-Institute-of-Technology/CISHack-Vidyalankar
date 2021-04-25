from django import forms
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm,UsernameField
from django.contrib.auth.models import User
from django.utils.translation import gettext,gettext_lazy as _
from .models import prescription,personal
from django.db import models
class SignUpForm(UserCreationForm):
    password1 = forms.CharField(label='Password',widget=forms.PasswordInput(attrs={'class':'form-control'}))
    password2 = forms.CharField(label='Password',widget=forms.PasswordInput(attrs={'class':'form-control'}))
    class Meta:
        model = User
        fields = ['username','first_name','last_name','email']
        widgets = {'username':forms.TextInput(attrs={'class':'form-control'}),
                    'first_name':forms.TextInput(attrs={'class':'form-control'}),
                    'last_name':forms.TextInput(attrs={'class':'form-control'}),
                    'email':forms.TextInput(attrs={'class':'form-control'})
        }
class LoginForm(AuthenticationForm):
    username = UsernameField(widget=forms.TextInput(attrs={'autofocus':True,'class':'form-control'}))
    password = forms.CharField(label=_("Password"),strip=False,widget=forms.PasswordInput(attrs={'autofocus':True,'class':'form-control'}))
class PostForm(forms.ModelForm):
    class Meta:
        model = prescription
        fields = ['title','desc']
        labels = {'title':'Title','desc':'Description'}
        widgets = {'title':forms.TextInput(attrs={'class':'form-control'}),'desc':forms.TextInput(attrs={'class':'form-control'})}
class PersonalForm(forms.ModelForm):
    class Meta:
        model = personal
        fields = ['fullname','age','email','phone','dob','blood','allergy','other','address']#'user',
        labels = {'fullname':'Full name','age':'Age','email':'email','phone':'Phone','dob':'Date of Birth','blood':'Blood group','allergy':'allergies','other':'other','address':'Address'}#'user':'Username',
        widgets = {'fullname':forms.TextInput(attrs={'class':'form-control'}),
                   'age':forms.TextInput(attrs={'class':'form-control'}),
                   'email':forms.EmailInput(attrs={'class':'form-control'}),
                   'phone':forms.TextInput(attrs={'class':'form-control'}),
                   'dob':forms.DateInput(attrs={'class':'form-control'}),
                   'blood':forms.TextInput(attrs={'class':'form-control'}),
                   'allergy':forms.TextInput(attrs={'class':'form-control'}),
                   'other':forms.TextInput(attrs={'class':'form-control'}),
                   'address':forms.TextInput(attrs={'class':'form-control'})
                    }