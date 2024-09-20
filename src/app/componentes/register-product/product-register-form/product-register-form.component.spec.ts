import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRegisterFormComponent } from './product-register-form.component';

describe('ProductRegisterFormComponent', () => {
  let component: ProductRegisterFormComponent;
  let fixture: ComponentFixture<ProductRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRegisterFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
