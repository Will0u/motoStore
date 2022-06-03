import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMarqueComponent } from './detail-marque.component';

describe('DetailMarqueComponent', () => {
  let component: DetailMarqueComponent;
  let fixture: ComponentFixture<DetailMarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMarqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
