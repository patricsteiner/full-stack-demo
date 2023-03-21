import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Dog } from './dog.model';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  private readonly apiUrl = 'http://localhost:8080/api/dogs';

  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl).pipe(tap(console.log));
  }

  find(id: string): Observable<Dog> {
    return this.http.get<Dog>(this.apiUrl + id);
  }

  create(dog: Dog) {
    return this.http.post(this.apiUrl, dog);
  }

  update(id: string, dog: Dog) {
    return this.http.patch(this.apiUrl + id, dog);
  }

  delete(id: string) {
    return this.http.delete(this.apiUrl + id);
  }
}
