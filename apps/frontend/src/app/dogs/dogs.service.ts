import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map, Observable } from 'rxjs';
import { Dog } from './dog.model';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  private readonly apiUrl = 'http://localhost:8080/api/dogs/';

  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl);
  }

  find(id: string): Observable<Dog> {
    return this.http.get<Dog>(this.apiUrl + id);
  }

  create(dog: Dog) {
    return firstValueFrom(this.http.post(this.apiUrl, dog));
  }

  update(id: string, dog: Dog) {
    return firstValueFrom(this.http.patch(this.apiUrl + id, dog));
  }

  delete(id: string) {
    return firstValueFrom(this.http.delete(this.apiUrl + id));
  }

  findRandomDogImageOnTheInternet(): Observable<string> {
    return this.http
      .get<{ status: string, message: string }>('https://dog.ceo/api/breeds/image/random')
      .pipe(map((res) => res.message));
  }
}
