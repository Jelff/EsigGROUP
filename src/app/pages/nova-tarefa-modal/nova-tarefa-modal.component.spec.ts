import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTarefaModalComponent } from './nova-tarefa-modal.component';

describe('NovaTarefaModalComponent', () => {
  let component: NovaTarefaModalComponent;
  let fixture: ComponentFixture<NovaTarefaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaTarefaModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaTarefaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
