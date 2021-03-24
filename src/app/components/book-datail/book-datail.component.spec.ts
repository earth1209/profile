import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDatailComponent } from './book-datail.component';

describe('BookDatailComponent', () => {
  let component: BookDatailComponent;
  let fixture: ComponentFixture<BookDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDatailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
