import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CitationService } from '../shared/citation.service';
import { CommonModule } from '@angular/common';


export const motsInterdit = ( control: AbstractControl):
ValidationErrors | null => {
  const mots = ["nabil", "mdr"]
  return mots.includes(control.value) ? {interdit : " Ce mot est interdit " } : null
}


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
    auteur: new FormControl('',  {validators: [Validators.required, Validators.minLength(8),motsInterdit ]}),
    citation: new FormControl('',  {validators: [Validators.required, Validators.minLength(4), motsInterdit]})
    
  })

  onSubmit(){
    if(this.form.valid){
      this.service.postCitation(this.form.value);
      this.form.reset();
    }
   
}

}