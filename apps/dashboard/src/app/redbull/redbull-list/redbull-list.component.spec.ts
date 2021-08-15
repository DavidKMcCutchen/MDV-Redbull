import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedbullListComponent } from './redbull-list.component';

describe('RedbullListComponent', () => {
  let component: RedbullListComponent;
  let fixture: ComponentFixture<RedbullListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedbullListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedbullListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
