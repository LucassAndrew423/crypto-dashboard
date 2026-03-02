import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface CoinDetail {
  id: string;
  name: string;
  symbol: string;
  description: { en: string };
  market_data: {
    current_price: { usd: number };
    market_cap: { usd: number };
    high_24h: { usd: number };
    low_24h: { usd: number };
    price_change_percentage_24h: number;
  };
  image: { large: string };
}

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private http = inject(HttpClient);

  // 1. ADICIONE O PREFIXO DO PROXY AQUI
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  
  // 2. JUNTE O PROXY COM A URL DA API
  private apiUrl = this.proxyUrl + 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';
  
  favorites = signal<string[]>(JSON.parse(localStorage.getItem('favs') || '[]'));
  coins = signal<any[]>([]);

  getTopCoins() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.coins.set(data);
    });
  }

  getCoinById(id: string) {
    // 3. ADICIONE O PROXY TAMBÉM NA BUSCA POR ID
    return this.http.get<CoinDetail>(`${this.proxyUrl}https://api.coingecko.com/api/v3/coins/${id}`);
  }

  toggleFavorite(coinID: string) {
    const current = this.favorites();
    const updated = current.includes(coinID)
      ? current.filter(id => id !== coinID)
      : [...current, coinID];

    this.favorites.set(updated);
    localStorage.setItem('favs', JSON.stringify(updated));
  }
}