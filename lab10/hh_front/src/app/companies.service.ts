import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from './company';
import { LoginResponse } from './login';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  BASE_URL = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>( this.BASE_URL + 'api/companies/');
  }

  login({username, password}: { username: any, password: any }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.BASE_URL + 'api/login/', {
      username,
      password
    });
  }
}
