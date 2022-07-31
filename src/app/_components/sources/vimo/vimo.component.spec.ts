import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VimoComponent } from './vimo.component';

describe('VimoComponent', () => {
  let component: VimoComponent;
  let fixture: ComponentFixture<VimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
