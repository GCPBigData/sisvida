import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovofuncionarioComponent } from './novofuncionario.component';

describe('NovofuncionarioComponent', () => {
  let component: NovofuncionarioComponent;
  let fixture: ComponentFixture<NovofuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovofuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovofuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
