import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../componentes/global/header/header.component";
import { FooterComponent } from "../../componentes/global/footer/footer.component";
import { ProductRegisterFormComponent } from "../../componentes/register-product/product-register-form/product-register-form.component";
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterProductService } from '../../services/register-product/register-product.service';
import { ProductResponse } from '../../interfaces/product-response';
import { HttpResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-product',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProductRegisterFormComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './register-product.component.html',
  styleUrl: './register-product.component.css'
})
export class RegisterProductComponent {
  _fb = inject(FormBuilder);
  registerProductService = inject(RegisterProductService);
  response! : ProductResponse;
  router = inject(Router);

  showSuccessPopup: boolean = false; // Controla a visibilidade do popup de sucesso

  form = this._fb.group({
    title: ["", Validators.required],
    description: ["", Validators.required],
    price: ["", Validators.required]
  });

  registerProduct() {
    this.registerProductService
      .registerProduct(
        this.form.controls.title.value!,
        this.form.controls.description.value!,
        this.form.controls.price.value!
      )
      .subscribe({
        next: (res: HttpResponse<ProductResponse>) => {
          this.response = res.body!;
          this.showSuccessPopup = true; // Exibe o popup de sucesso
        },
        error: (err) => {
          console.error('Erro ao registrar produto:', err);
        }
      });
  }

  closeSuccessPopup() {
    this.showSuccessPopup = false; // Fecha o popup de sucesso
  }
}