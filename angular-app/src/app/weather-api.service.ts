import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IWeatherResponse } from './iweather-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {

  http = inject(HttpClient);

  getList(lat: string, lon: string): Observable<IWeatherResponse>{
    var result = this.http.get<IWeatherResponse>(`http://localhost:5000/api/forecast?lat=${lat}&lon=${lon}`)
    return result;
  }
}
