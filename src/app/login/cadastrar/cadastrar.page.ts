import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonCheckbox, IonText, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
  standalone: true,
  imports: [IonButton, IonText, IonCheckbox, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CadastrarPage implements OnInit {

titulo = 'Cadastro';
subtitulo = 'Faça seu cadastro';
email: any;
senha: any;

  constructor() { }

  ngOnInit() {
  }


  cadastrar() {
    throw new Error('Method not implemented.');
    }

}
