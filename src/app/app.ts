import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // Adicione este import
import { CoinListComponent } from './components/coin-list/coin-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CoinListComponent, RouterOutlet], // Adicione aqui no array
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'crypto-dashboard';
}