import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { map } from 'rxjs/operators';
export interface Users {
  id: string,
  fullName: string,
  Status: number,
  dateTime: string
  FullName: string
}
@Injectable({ providedIn: 'root' })
export class TableService {
  url = `${environment.apiUrl}/Users/Persons`;
  constructor(
    private http: HttpClient
  ) {
  }

  getData() {
    return this.http.get<Users[]>(`${this.url}`).pipe(
      map(res => res )
    );
  }

  saveData(data:any) {
    return this.http.post<Users>(`${this.url}`, data).pipe(
      map(res => res)
    )
  }

  update(data: Users[]) {
    return this.http.put(`${this.url}`, data).pipe(
      map(res => res)
    )
  }
}
