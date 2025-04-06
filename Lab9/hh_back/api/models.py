from django.db import models

class Company(models.Model):
    name=models.CharField(max_length=255)
    description=models.TextField()
    city=models.CharField(max_length=255)
    address=models.TextField()

    class Meta:
        verbose_name='Company'
        verbose_name_plural='Companies'

    def to_json(self):
        return {
      'id': self.id,
      'name': self.name,
      'description': self.description,
      'city': self.city,
      'address': self.address
    }

    def _str_(self):
        return f'{self.id}:{self.name}'
    
class Vacancy(models.Model):
    name=models.CharField(max_length=255)
    description=models.TextField()
    salary=models.FloatField()
    company=models.ForeignKey(Company,on_delete=models.CASCADE)

    class Meta:
        verbose_name='Vacancy'
        verbose_name_plural='Vacancies'

    def to_json(self):
        return{
        'id': self.id,
      'name': self.name,
      'description': self.description,
      'salary': self.salary,
        }
    
    def _str_(self):
        return f'{self.id}:{self.name}'