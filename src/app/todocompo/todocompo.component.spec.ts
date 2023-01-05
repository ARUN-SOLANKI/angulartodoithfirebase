import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocompoComponent } from './todocompo.component';

describe('TodocompoComponent', () => {
  let component: TodocompoComponent;
  let fixture: ComponentFixture<TodocompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodocompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodocompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
