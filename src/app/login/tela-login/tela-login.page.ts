import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonItem, IonLabel, IonCheckbox, IonIcon, IonText, IonNav, IonInput } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ApiUsuariosService } from 'src/app/API/api-usuarios/api-usuarios.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
  standalone: true,
  imports: [IonInput, IonNav, IonText, IonIcon, IonCheckbox, IonLabel, IonItem, IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class TelaLoginPage implements OnInit {

  formulario!: FormGroup;
  titulo = 'Login'
  subtitulo = 'Faça login para continuar'

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private  api: ApiUsuariosService
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: [0],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  login() {
    if(this.formulario.valid){
    }
  }

  cadastrar() {
    this.router.navigate(['/cadastrar'])
  }


}
