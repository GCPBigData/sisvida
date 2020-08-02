import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoexameComponent } from './novoexame.component';

describe('NovoexameComponent', () => {
  let component: NovoexameComponent;
  let fixture: ComponentFixture<NovoexameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoexameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoexameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
