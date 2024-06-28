import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-auteur',
  standalone: true,
  imports: [NgFor, FormsModule, SearchPipe],
  templateUrl: './auteur.component.html',
  styleUrl: './auteur.component.css'
})
export class AuteurComponent {

  terms="";

auteurs = ["Jessica", "Celine", "Patrick", "Monica","Samy", "Younes", "Amelie", "Lionel", "Mbarka", "Arnaud", "Alex", "Nabil","Aîmen" ]

}
