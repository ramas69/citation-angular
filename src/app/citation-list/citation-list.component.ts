import { Component, OnInit, inject } from '@angular/core';
import { citationInterface } from '../shared/entities';
import { CitationService } from '../shared/citation.service';
import { CommonModule } from '@angular/common';
import { CreateReactiveCitationComponent } from '../create-reactive-citation/create-reactive-citation.component';

@Component({
  selector: 'app-citation-list',
  standalone: true,
  imports: [CommonModule, CreateReactiveCitationComponent],
  templateUrl: './citation-list.component.html',
  styleUrl: './citation-list.component.css'
})
export class CitationListComponent implements OnInit {



  citations:citationInterface [] = [];
  service = inject(CitationService)

ngOnInit(): void {
    this.getCitations();
}
getCitations(){
  this.citations =   this.service.fetchAll();
}


}
