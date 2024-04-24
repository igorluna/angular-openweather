export interface IWeatherResponse {
  isSuccess: boolean;
  result: Result;
  statusCode: number;
  errorMessages: any[];
}
export interface Result {
  message: number;
  cnt: number;
  list: List[];
  city: City;
}
export interface City {
  name: string;
  coord: Coord;
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}
export interface Coord {
  lat: number;
  lon: number;
}
export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  dt_txt: string;
}
export interface Weather {
  main: string;
  description: string;
  icon: string;
}
export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}
