import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IWeatherResponse } from './iweather-response';
import { WeatherApiService } from './weather-api.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { UtcToLocaleTimePipe } from './utc-to-locale-time.pipe';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, UtcToLocaleTimePipe, DatePipe, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  title = 'angular-app';

  public weatherSignal = signal<IWeatherResponse | null>(null);

  weather: IWeatherResponse | undefined;

  constructor(
    private weathersapi: WeatherApiService,
    private formBuilder: FormBuilder
  ) {  }

  checkoutForm = this.formBuilder.group({
    lat: '',
    lon: ''
  });

  onSubmit(): void {
    this.callApi(this.checkoutForm.value.lat||'',this.checkoutForm.value.lon||'');
    this.checkoutForm.reset();
  }

  ngOnInit() {
    this.callApi('-7,223040','-35,888254');
  }

  callApi(lat:string, lon:string){
    this.weathersapi.getList(lat,lon).subscribe({
      next: (data) => {
          this.weatherSignal.set(data)
          this.weather = data;
      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
          console.log('complete')
      }
    })
  }
}
