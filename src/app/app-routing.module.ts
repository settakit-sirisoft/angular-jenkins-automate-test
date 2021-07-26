import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ConfirmComponent } from './confirm/confirm.component';
import { FormInputComponent } from './form-input/form-input.component';
import { LoginComponent } from './login/login.component';
// import { ProductComponent } from './product/product.component';
import { SuccessComponent } from './success/success.component';


// const routes: Routes = [];

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "form-input", component: FormInputComponent },
  // { path: "confirm", component: ConfirmComponent },
  { path: "success", component: SuccessComponent, canActivate: [] },
  { path: "**", redirectTo: "login" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
