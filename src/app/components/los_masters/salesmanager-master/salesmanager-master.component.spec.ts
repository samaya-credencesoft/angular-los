import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanagerMasterComponent } from './salesmanager-master.component';

describe('SalesmanagerMasterComponent', () => {
  let component: SalesmanagerMasterComponent;
  let fixture: ComponentFixture<SalesmanagerMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesmanagerMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmanagerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
