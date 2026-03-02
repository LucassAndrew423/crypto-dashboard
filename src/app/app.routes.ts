// app.routes.ts
import { Routes } from '@angular/router';
import { CoinListComponent } from './components/coin-list/coin-list';
import { CoinDetailComponent } from './components/coin-detail/coin-detail';

export const routes: Routes = [
  { path: '', component: CoinListComponent }, // Página principal
  { path: 'coin/:id', component: CoinDetailComponent } // Detalhes da moeda (ex: /coin/bitcoin)
];