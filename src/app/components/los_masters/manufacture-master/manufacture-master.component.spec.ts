import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureMasterComponent } from './manufacture-master.component';

describe('ManufactureMasterComponent', () => {
  let component: ManufactureMasterComponent;
  let fixture: ComponentFixture<ManufactureMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufactureMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactureMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
