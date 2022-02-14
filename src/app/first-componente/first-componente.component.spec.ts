import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponenteComponent } from './first-componente.component';

describe('FirstComponenteComponent', () => {
  let component: FirstComponenteComponent;
  let fixture: ComponentFixture<FirstComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
