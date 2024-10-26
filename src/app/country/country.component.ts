import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment.developments';

export interface Country {
  id: number;
  name: string;
  iso2: string;
  iso3: string;
}

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent implements OnInit {
  public countries: Country[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getCountries();
  }
  getCountries() {
    this.http.get<Country[]>(`${environment.baseUrl}api/Countries`).subscribe(
      {
        next: result => this.countries = result,
        error: e => console.error(e)
      }
    )
  }

}
