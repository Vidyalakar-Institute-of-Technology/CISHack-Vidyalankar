# Generated by Django 3.2 on 2021-04-24 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meditechapp', '0004_alter_blooddonation_contact'),
    ]

    operations = [
        migrations.CreateModel(
            name='SchemesEligibility',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('age', models.IntegerField()),
                ('income', models.CharField(blank=True, max_length=200, null=True)),
                ('occupation', models.CharField(blank=True, max_length=500, null=True)),
                ('caste', models.CharField(blank=True, max_length=500, null=True)),
                ('radio', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
    ]
