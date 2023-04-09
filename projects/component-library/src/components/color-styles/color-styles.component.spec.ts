import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorStylesComponent } from './color-styles.component';

describe('ColorStylesComponent', () => {
  let component: ColorStylesComponent;
  let fixture: ComponentFixture<ColorStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorStylesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
