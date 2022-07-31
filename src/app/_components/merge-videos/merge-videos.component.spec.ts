import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeVideosComponent } from './merge-videos.component';

describe('MergeVideosComponent', () => {
  let component: MergeVideosComponent;
  let fixture: ComponentFixture<MergeVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
