import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MessageComponent } from './pages/message/message.component';
import { FileuploadComponent } from './pages/fileupload/fileupload.component';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PessoaComponent } from './pages/pessoa/pessoa.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { IaComponent } from './pages/ia/ia.component';
import { Covid19Component } from './pages/covid19/covid19.component';
import { NovopacienteComponent } from './pages/paciente/novopaciente/novopaciente.component';
import { NovofuncionarioComponent } from './pages/funcionario/novofuncionario/novofuncionario.component';
import { ExameComponent } from './pages/exame/exame.component';
import { NovoexameComponent } from './pages/exame/novoexame/novoexame.component';

/*import { LoginComponent } from "./pages/login/login/login.component";
import { RegisterComponent } from "./pages/login/register/register.component";
import { ProfileComponent } from "./pages/login/profile/profile.component";
import { BoardAdminComponent } from "./pages/login/board-admin/board-admin.component";
import { BoardModeratorComponent } from "./pages/login/board-moderator/board-moderator.component";
import { BoardUserComponent } from "./pages/login/board-user/board-user.component";*/

import { authInterceptorProviders } from './pages/login/_helpers/auth.interceptor';
import {QRCodeModule} from "angularx-qrcode";

/*npm install ng2-pdf-viewer --save*/
@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        NgbModule,
        RouterModule,
        AppRoutingModule,
        PdfViewerModule,
        ToastrModule.forRoot(),
        SweetAlert2Module,
        QRCodeModule,
     /* LoginComponent,
      RegisterComponent,
      ProfileComponent,
      BoardAdminComponent,
      BoardModeratorComponent,
      BoardUserComponent*/

    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    MessageComponent,
    FileuploadComponent,
    PessoaComponent,
    FuncionarioComponent,
    PacienteComponent,
    IaComponent,
    Covid19Component,
    NovopacienteComponent,
    NovofuncionarioComponent,
    ExameComponent,
    NovoexameComponent
    ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
