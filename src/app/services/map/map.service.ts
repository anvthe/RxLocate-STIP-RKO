import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private mapApiUrl = 'http://localhost:8080/map';
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) {}

  Get_All_Locations(): Observable<any> | null {
    const url = `${this.mapApiUrl}/locations`;

    const token = this.localStorageService.getToken();

    if (token) {
      const headers = new HttpHeaders({
        authorization: `Bearer ${token}`,
      });
      return this.http.get(url, { headers });
    } else {
      console.log('Token not available');
      return null;
    }
  }

  Get_Location_Medicine(
    location: string,
    medicine: string,
  ): Observable<any> | null {
    const url = `${this.mapApiUrl}?locationName=${location}&drugName=${medicine}`;

    const token = this.localStorageService.getToken();

    if (token) {
      const headers = new HttpHeaders({
        authorization: `Bearer ${token}`,
      });
      return this.http.get(url, { headers });
    } else {
      console.log('Token not available');
      return null;
    }
  }
}
