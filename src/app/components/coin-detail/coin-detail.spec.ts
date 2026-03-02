import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDetailComponent } from './coin-detail';

describe('CoinDetail', () => {
  let component: CoinDetailComponent;
  let fixture: ComponentFixture<CoinDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoinDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
