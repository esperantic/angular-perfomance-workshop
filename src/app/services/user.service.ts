import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const SERVICE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService: HttpClient) {}

  public getAll() {
    const endpoint = `${SERVICE_URL}/users`;
    return this.httpService.get<any>(endpoint)
      .pipe(map(response => response.results))
      .toPromise();
  }

  public getUser(userId: string) {
    const endpoint = `${SERVICE_URL}/user/${userId}`;
    return this.httpService.get(endpoint);
  }
}
