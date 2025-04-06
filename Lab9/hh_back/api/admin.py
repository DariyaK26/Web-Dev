from django.contrib import admin
from .models import Company,Vacancy

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display=('id','name','address')
    search_fields=('name','address')

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display=('id','name','salary')
    search_fields=('name','salary')