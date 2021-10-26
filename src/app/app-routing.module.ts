import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/auth/cadastro/cadastro.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProdutoComponent } from './components/shop/produto/produto.component';

const routes: Routes = [
  {path: 'produto/:id', component: ProdutoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
