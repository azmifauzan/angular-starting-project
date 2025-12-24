import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail } from './detail';

describe('Detail', () => {
  let component: Detail;
  let fixture: ComponentFixture<Detail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detail);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('task', {
      id: 't1',
      userId: 'u1',
      title: 'Test Task',
      summary: 'Test Summary',
      dueDate: '2025-12-31'
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
