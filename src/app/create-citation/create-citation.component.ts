import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CitationService } from '../shared/citation.service';
import { citationInterface } from '../shared/entities';

@Component({
  selector: 'app-create-citation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-citation.component.html',
  styleUrl: './create-citation.component.css'
})
export class CreateCitationComponent {

  service = inject(CitationService)
  
 citation:string="";
 auteur:string = "";



onSubmit(form:NgForm){
  this.service.postCitation(form.value)
}

}
