import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonIcon, IonButton, IonCard, IonGrid, IonRow, IonFooter, IonList, IonItem, IonThumbnail, IonLabel } from '@ionic/angular/standalone';
import { CabecalhoPage } from "../../cabecalho/cabecalho.page";
import { addIcons } from 'ionicons';
import { car, location, chatboxEllipses } from 'ionicons/icons';
import { Router } from '@angular/router';
import { RodapePage } from "../../rodape/rodape.page";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonFooter, IonGrid, IonCard, IonIcon, IonText, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CabecalhoPage, IonButton, IonRow, IonThumbnail, IonLabel, RodapePage]
})
export class HomePage implements OnInit {

  emailCar = 'magnocar@gmail.com'

  constructor(
    private router: Router
  ) {
    addIcons({car,chatboxEllipses,location});
  }

  ngOnInit() {
  }

  goToServicos(){
    this.router.navigate(['/servicos']);
  }

}
