"""Datambulance URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from web import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.user_login,name='signin'),
    path('signup/', views.user_signup,name='signup'),
    path('', views.index,name='home'),
    path('myrecords/', views.myrecords,name='myrecords'),
    path('logout/', views.logout_user,name='logout'),
    path('update/<int:id>/', views.update,name="update"),
    path('userdata/<my_id>/', views.userdata,name="userdata"),
    path('updatepresc/', views.updatepresc,name="updatepresc"),
    path('delete/<int:id>/', views.delete_post,name="deletepost"),
    path('addpresc/', views.addpresc,name="addpresc"),
    path('userprofile/', views.userprofile,name='userprofile'),
    path('tryuserprofile/<my_id>/', views.tryuserprofile,name='tryuserprofile'),
]
