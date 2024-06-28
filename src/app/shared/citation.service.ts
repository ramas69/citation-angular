import { Injectable } from '@angular/core';
import { citationMock } from './citation-mock';
import { citationInterface } from './entities';

@Injectable({
  providedIn: 'root'
})
export class CitationService {

  constructor() { }

  fetchAll(){
    return citationMock;
  }

  postCitation(citation:citationInterface){
    citationMock.push(citation);

  }
}
