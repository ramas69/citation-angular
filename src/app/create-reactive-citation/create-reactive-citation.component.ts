import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CitationService } from '../shared/citation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-reactive-citation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-reactive-citation.component.html',
  styleUrl: './create-reactive-citation.component.css'
})
export class CreateReactiveCitationComponent {

  service = inject(CitationService)
  public form:FormGroup = new FormGroup ({
    auteur: new FormControl('',  {validators: [Validators.required, Validators.minLength(8)]}),
    citation: new FormControl('',  {validators: [Validators.required, Validators.minLength(4)]})
    
  })


  onSubmit(){
    if(this.form.valid){
      this.service.postCitation(this.form.value);
      this.form.reset();
    }
   
}

}