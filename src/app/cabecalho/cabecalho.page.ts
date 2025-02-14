import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonNav, IonBackButton, IonText, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { call, personAddOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.page.html',
  styleUrls: ['./cabecalho.page.scss'],
  standalone: true,
  imports: [IonText, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonNav, IonBackButton, IonIcon]
})
export class CabecalhoPage implements OnInit {

  constructor(
    private router: Router
  ) {
    addIcons({call,personAddOutline});
  }

  ngOnInit() {
  }


  home(){
    this.router.navigate(['/home']);
  }

  sobre() {
    this.router.navigate(['/sobre']);
  }

  servicos() {
    this.router.navigate(['/servicos']);
  }
  goToHome() {
    this.router.navigate(['/home']);
  }

  login() {
    this.router.navigate(['/tela-login']);
  }
}
