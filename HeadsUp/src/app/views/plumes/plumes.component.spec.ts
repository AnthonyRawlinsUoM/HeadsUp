import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumesComponent } from './plumes.component';

describe('PlumesComponent', () => {
  let component: PlumesComponent;
  let fixture: ComponentFixture<PlumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlumesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
