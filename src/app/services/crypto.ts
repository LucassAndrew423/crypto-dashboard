import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';
  favorites = signal<string[]>(JSON.parse(localStorage.getItem('favs') || '[]'));
  coins = signal<any[]>([]);

  getTopCoins() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.coins.set(data)

    })
  }
  toggleFavorite(coinID: string) {

    const current = this.favorites()
    const updated = current.includes(coinID)
      ? current.filter(id => id !== coinID)
      : [...current, coinID]

    this.favorites.set(updated)
    localStorage.setItem('favs', JSON.stringify(updated))
  }

}

