from django.contrib import admin
from api.models import Company, Vacancy

# Register your models here.
@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
  list_display = ('id', 'name', 'address')
  search_fields = ('name', 'address')

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
  list_display = ('id', 'name', 'salary')
  search_fields = ('name', 'salary')
