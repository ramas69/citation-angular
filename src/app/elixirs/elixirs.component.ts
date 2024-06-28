import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';
import { ElixirsService } from '../shared/elixirs.service';
import { Elixir } from '../shared/entities';

@Component({
  selector: 'app-elixirs',
  standalone: true,
  imports: [FormsModule, NgFor, SearchPipe],
  templateUrl: './elixirs.component.html',
  styleUrl: './elixirs.component.css'
})
export class ElixirsComponent implements OnInit {

  elixirs:Elixir[]= [];
  terms:string ="";

  service = inject(ElixirsService)

  ngOnInit(): void {
      this.service.fetchAll().subscribe(data => {
        this.elixirs = data;
      })
  }

}
