import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttributeValueComponent } from './add-attribute-value.component.ts';

describe('AddAttributeValueComponent', () => {
  let component: AddAttributeValueComponent;
  let fixture: ComponentFixture<AddAttributeValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAttributeValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttributeValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
