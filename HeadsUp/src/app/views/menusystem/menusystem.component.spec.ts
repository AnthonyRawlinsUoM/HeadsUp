import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusystemComponent } from './menusystem.component';

describe('MenusystemComponent', () => {
  let component: MenusystemComponent;
  let fixture: ComponentFixture<MenusystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
