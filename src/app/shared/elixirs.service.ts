import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Elixir } from './entities';

@Injectable({
  providedIn: 'root'
})
export class ElixirsService {

  url="https://wizard-world-api.herokuapp.com/Elixirs";
  constructor(private http: HttpClient) { }

  fetchAll(){
    return this.http.get<Elixir[]>(this.url)
  }
}
