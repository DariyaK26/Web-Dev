import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vacancy } from './vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  BASE_URL = 'http://127.0.0.1:8000/';
  vacancies: Vacancy[];

  constructor( private http: HttpClient ) {
    this.vacancies = []
  }

  private vacancyUrl = this.BASE_URL + 'api/vacancies/'

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.vacancyUrl);
  }

  getVacanciesByCompany(id: number): Observable<Vacancy[]> {
    // const url = `${this.vacancyUrl}/?company=${id}`;
    return this.http.get<Vacancy[]>(this.BASE_URL + `api/companies/${id}/vacancies/`);
  }
}
