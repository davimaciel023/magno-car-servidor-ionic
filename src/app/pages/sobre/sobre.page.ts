import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonText, IonLabel, IonItem, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { CabecalhoPage } from "../../cabecalho/cabecalho.page";
import { RodapePage } from 'src/app/rodape/rodape.page';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonLabel, IonText, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CabecalhoPage, IonItem, RodapePage]
})
export class SobrePage implements OnInit {

  sobre = 'Me chamo Magno, tenho 31 anos, sou casado e tenho dois filhos gêmeos. Abdiquei da minha vida profissional como CLT para investir no meu próprio negócio, que por sinal, foi a melhor escolha que fiz.'

  magnoCar = 'MagnoCar é uma oficina para carro e moto que vem crescendo a cada dia. Em 2024, estivemos no Melhores do Ano da cidade de Boa Viagem na categoria Oficina de Carro e Oficina de Ar-condicionado Automotivo. Isso porque também temos uma parte direcionada para concerto de Ar-condicionado Automotivo, cujo nome é MagnoAr. Temos uma equipe maravilhosa de funcionários, o máximo de dedicação e organização. Trabalhamos com produtos de qualidade, satisfazendo todas as necessidades dos nossos clientes da melhor forma possível. Atuo como mecânico junto aos outros funcionários, enquanto minha esposa administra o negócio e cuida das finanças.'

  constructor() { }

  ngOnInit() {
  }

}
