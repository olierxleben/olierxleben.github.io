import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsPageComponent } from './readings-page.component';

describe('ReadingsPageComponent', () => {
  let component: ReadingsPageComponent;
  let fixture: ComponentFixture<ReadingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
