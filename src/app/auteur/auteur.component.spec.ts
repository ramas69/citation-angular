import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuteurComponent } from './auteur.component';

describe('AuteurComponent', () => {
  let component: AuteurComponent;
  let fixture: ComponentFixture<AuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
