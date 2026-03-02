import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CryptoService } from '../../services/crypto';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-coin-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coin-list.html',
  styleUrl: './coin-list.css'
})
export class CoinListComponent implements OnInit {
  cryptoService = inject(CryptoService);
  searchTerm = signal('')
  filteredCoins = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const favs = this.cryptoService.favorites();

    const list = this.cryptoService.coins().filter(coin =>
      coin.name.toLowerCase().includes(term) ||
      coin.symbol.toLowerCase().includes(term)
    );

  
    return list.sort((a, b) => {
      const aFav = favs.includes(a.id);
      const bFav = favs.includes(b.id);
      if (aFav === bFav) return a.market_cap_rank - b.market_cap_rank;
      return aFav ? -1 : 1;
    });
  });
  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);

  }


  // No coin-list.ts
  refreshData() {
    this.cryptoService.getTopCoins();
  }
  ngOnInit() {
    console.log('Componente carregado! Buscando moedas...');
    this.cryptoService.getTopCoins();


  }
}