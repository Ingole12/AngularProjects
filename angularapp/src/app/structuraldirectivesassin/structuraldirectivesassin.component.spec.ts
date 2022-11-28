import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuraldirectivesassinComponent } from './structuraldirectivesassin.component';

describe('StructuraldirectivesassinComponent', () => {
  let component: StructuraldirectivesassinComponent;
  let fixture: ComponentFixture<StructuraldirectivesassinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuraldirectivesassinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuraldirectivesassinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
