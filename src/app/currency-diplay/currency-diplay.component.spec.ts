import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyDiplayComponent } from './currency-diplay.component';

describe('CurrencyDiplayComponent', () => {
  let component: CurrencyDiplayComponent;
  let fixture: ComponentFixture<CurrencyDiplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyDiplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyDiplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
