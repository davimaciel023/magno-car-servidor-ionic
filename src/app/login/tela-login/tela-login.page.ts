import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonItem, IonLabel, IonCheckbox, IonIcon, IonText, IonNav, IonInput, IonImg, IonInputPasswordToggle, IonSegment, IonSegmentButton, IonSegmentView, IonSegmentContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ApiUsuariosService } from 'src/app/api/usuarios/api-usuarios.service';
@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
  standalone: true,
  imports: [IonSegmentButton, IonSegment, IonImg, IonInput, IonNav, IonText, IonIcon, IonCheckbox, IonLabel, IonItem, IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonInputPasswordToggle, IonSegmentView, IonSegmentContent]
})
export class TelaLoginPage implements OnInit {

  formularioLogin!: FormGroup;
  formularioCadastro!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private api: ApiUsuariosService
  ) {}

  segmentValue = 'entrar';

  ngOnInit() {
    this.formularioLogin = this.formBuilder.group({
      id: [0],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })

    this.formularioCadastro = this.formBuilder.group({
      id: [0],
      nomeDoUsuario: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      modeloCarro: ['', Validators.compose([Validators.required])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  login() {
    if(this.formularioLogin.valid) {
      const { email, senha } = this.formularioLogin.value
      console.log(email, senha)

      this.api.login(email, senha).subscribe((response) => {
        console.log('Login', response);
        this.router.navigate(['/home'])
      })
    }
  }

  cadastrar() {
    if(this.formularioCadastro.valid) {
      this.api.cadastroDeUsuario(this.formularioCadastro.value).subscribe((response) => {
        console.log('Cadastro', response);
        this.router.navigate(['/home'])
      })
    }
  }

  esqueceuSenha() {
    this.router.navigate(['/esqueceu-senha'])
  }


}
