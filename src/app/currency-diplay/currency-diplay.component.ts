import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../service/currency.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Data} from "../model/data";

@Component({
  selector: 'app-currency-diplay',
  templateUrl: './currency-diplay.component.html',
  styleUrls: ['./currency-diplay.component.css']
})
export class CurrencyDiplayComponent implements OnInit {

  form = new FormGroup({
    usdRate: new FormControl('USD', Validators.required),
    country: new FormControl('', Validators.required)
  });
  countryZAR: string = '';
  countryBDT: string = '';
  countryINR: string = '';
  countryPKR: string = '';
  data: Data = new Data();

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.loadCurrencyRates();
    this.refresh();
  }

  loadCurrencyRates() {
    this.currencyService.getUSDRates().subscribe(
      data => {

        this.data.ZAR = data.data.ZAR;
        this.data.BDT = data.data.BDT;
        this.data.INR = data.data.INR;
        this.data.PKR = data.data.PKR;

        if (this.data.ZAR) {
          this.countryZAR = 'ZAR';
        }
        if (this.data.BDT) {
          this.countryBDT = 'BDT';
        }
        if (this.data.INR) {
          this.countryINR = 'INR';
        }
        if (this.data.PKR) {
          this.countryPKR = 'PKR';
        }
      },
      error => {
        console.error('error', error);
      }
    );
  }

  refresh() {
    this.ngOnInit();
  }
}
