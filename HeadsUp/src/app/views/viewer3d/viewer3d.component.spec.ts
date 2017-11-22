import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewer3DComponent } from './viewer3d.component';

describe('Viewer3DComponent', () => {
  let component: Viewer3DComponent;
  let fixture: ComponentFixture<Viewer3DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewer3DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewer3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
