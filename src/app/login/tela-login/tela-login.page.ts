import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonItem, IonLabel, IonCheckbox, IonIcon, IonText, IonNav, IonInput, IonImg, IonInputPasswordToggle, IonSegment, IonSegmentButton, IonSegmentView, IonSegmentContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
  standalone: true,
  imports: [IonSegmentButton, IonSegment, IonImg, IonInput, IonNav, IonText, IonIcon, IonCheckbox, IonLabel, IonItem, IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonInputPasswordToggle, IonSegmentView, IonSegmentContent]
})
export class TelaLoginPage implements OnInit {

  formulario!: FormGroup;
  titulo = 'Login'
  subtitulo = 'Faça login para continuar'

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: [0],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  login() {

  }

  cadastrar() {
    this.router.navigate(['/cadastrar'])
  }


}
