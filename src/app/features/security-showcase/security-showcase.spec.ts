import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityShowcase } from './security-showcase';

describe('SecurityShowcase', () => {
  let component: SecurityShowcase;
  let fixture: ComponentFixture<SecurityShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecurityShowcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityShowcase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
