import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CryptoService } from '../../services/crypto';
import { CoinDetail } from '../../services/crypto';

@Component({
  selector: 'app-coin-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './coin-detail.html', 
  styleUrl: './coin-detail.css'    
})
export class CoinDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private cryptoService = inject(CryptoService);
  
  
  coin = signal<CoinDetail | null>(null);
  loading = signal(true);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cryptoService.getCoinById(id).subscribe({
        next: (data) => {
          this.coin.set(data);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
    }
  }
}