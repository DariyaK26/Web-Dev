from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView


# Create your views here.

@api_view(['GET', 'POST'])
def company_list(request):

    if request.method == 'GET':
      companies = Company.objects.all()
      serializer = CompanySerializer(companies, many=True)
      return Response(serializer.data)

    elif request.method == 'POST':
      serializer = CompanySerializer(data=request.data)
      if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
      return Response({'error': serializer.errors},
                      status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, id):
  company = Company.objects.get(id=id)
  if request.method == 'GET':
    serializer = CompanySerializer(company)
    return Response(serializer.data)

  elif request.method == 'PUT':
    serializer = CompanySerializer(instance=company, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response({'error': serializer.errors})

  elif request.method == 'DELETE':
    company.delete()
    return Response({'deleted': True})

@api_view(['GET'])
def company_vacancy(request, id):
    if request.method == 'GET':
        company = Company.objects.get(id=id)
        vacancies = company.vacancy_set.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


class VacancyListAPIView(APIView):
  def get(self, request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

  def post(self, request):
    serializer = VacancySerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response({'error': serializer.errors},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class VacancyDetailAPIView(APIView):
  def get_object(self, id):
    return Vacancy.objects.get(id=id)

  def get(self, request, id):
    vacancy = self.get_object(id)
    serializer = VacancySerializer(vacancy)
    return Response(serializer.data)

  def put(self, request, id):
    vacancy = self.get_object(id)
    serializer = VacancySerializer(instance=vacancy, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response({'error': serializer.errors})

  def delete(self, request, id):
    vacancy = self.get_object(id)
    vacancy.delete()
    return Response({'deleted': True})


class VacancyTopTenAPIView(APIView):
  def get(self, request):
    vacancies = Vacancy.objects.order_by("-salary").all()[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)
