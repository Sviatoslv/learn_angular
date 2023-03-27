import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environments.prod';
import { Observable } from 'rxjs';
import { APIResponse, Result } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getResultList(): Observable<APIResponse<Result>> {
    return this.http.get<APIResponse<Result>>(`${env.BASE_URL}/results`);
  }
}
