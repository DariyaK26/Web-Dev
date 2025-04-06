from django.shortcuts import render
import json
from django.http import JsonResponse
from .models import Company,Vacancy
from django.http import Http404


def company_list(request):
    if request.method=='GET':
        companies=Company.objects.all()
        json_companies=[c.to_json() for c in companies]
        return JsonResponse(json_companies,safe=False)
    elif request.method=='POST':
        data=json.loads(request.body)
        try:
            company=Company.objects.create(name=data["name"])
        except Exception as e:
            return JsonResponse({'message':str(e)})
        return JsonResponse(company.to_json())
    

def company_detail(request,id):
    try:
        company=Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        raise Http404
    if request.method=='GET':
        return JsonResponse(company.to_json())
    elif request.method=='PUT':
        data=json.loads(request.body)
        company.name=data['name']
        company.save()
        return JsonResponse(company.to_json())
    elif request.method=='DELETE':
        company.delete()
        return JsonResponse({'message':'deleted'},status=200)
    
def company_vacancy(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        raise Http404
    vacancies = company.vacancy_set.all()
    json_vacancies = [v.to_json() for v in vacancies]
    return JsonResponse(json_vacancies, safe=False)

def vacancy_list(request):
  if request.method == "GET":
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)
  elif request.method == "POST":
    data = json.loads(request.body)
    try:
      vacancy = Vacancy.objects.create(
        name=data["name"],
        salary=data['salary'],
        company=Company.objects.get(id=data['company']))
    except Exception as e:
        return JsonResponse({'message': str(e)})
    return JsonResponse(vacancy.to_json())

def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        raise Http404
    if request.method == "GET":
      return JsonResponse(vacancy.to_json())
    elif request.method == "PUT":
      data = json.loads(request.body)
      vacancy.name = data['name']
      vacancy.salary = data['salary']
      vacancy.save()
      return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
      vacancy.delete()
      return JsonResponse({'message': 'deleted'}, status=200)


def vacancy_top_ten(request):
    try:
        vacancies = Vacancy.objects.order_by("-salary").all()[:10]
    except Vacancy.DoesNotExist as e:
        raise Http404
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)