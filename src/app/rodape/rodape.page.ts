import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.page.html',
  styleUrls: ['./rodape.page.scss'],
  standalone: true,
  imports: [IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RodapePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
