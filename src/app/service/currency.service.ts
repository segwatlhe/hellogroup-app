import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {
  }

  // getUSDRates(): Observable<any> {
  //   return this.http.get('https://freecurrencyapi.net/api/v2/latest?apikey=f28e9f00-2d7a-11ec-9771-cfa941141e65').pipe(map(
  //     data => {
  //       return data;
  //     })
  //   );
  // }

  getUSDRates(): Observable<any> {
    return this.http.get('http://localhost:8080/api/hellogroup/rates');
  }
}
