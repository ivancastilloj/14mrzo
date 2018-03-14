import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilipinasComponent } from './filipinas.component';

describe('FilipinasComponent', () => {
  let component: FilipinasComponent;
  let fixture: ComponentFixture<FilipinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilipinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilipinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
