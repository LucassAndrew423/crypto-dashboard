import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinListComponent } from './coin-list';

describe('CoinList', () => {
  let component: CoinListComponent;
  let fixture: ComponentFixture<CoinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoinListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
