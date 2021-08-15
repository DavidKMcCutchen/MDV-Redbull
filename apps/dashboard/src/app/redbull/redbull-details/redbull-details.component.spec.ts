import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedbullDetailsComponent } from './redbull-details.component';

describe('RedbullDetailsComponent', () => {
  let component: RedbullDetailsComponent;
  let fixture: ComponentFixture<RedbullDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedbullDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedbullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
