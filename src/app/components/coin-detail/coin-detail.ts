import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coin-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Detalhes da Moeda</h1>` // Template simples para testar
})
export class CoinDetailComponent { } // Verifique se o nome é EXATAMENTE esse