import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthorPipe } from '../author.pipe';
import { CbPipe } from '../cb.pipe';
import { TtcPipe } from '../ttc.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, AuthorPipe, CbPipe, TtcPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent {

  titre = "Pourquoi une citation";
  datePublication = new Date();
  promo = "Promo 8 Human Booster";
  prenom = " Rama";
  montant = 1000
}
