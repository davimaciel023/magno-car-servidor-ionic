import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonText, IonButton, IonCardSubtitle, IonCardContent, IonList, IonListHeader, IonLabel, IonItem, IonThumbnail } from '@ionic/angular/standalone';
import { CabecalhoPage } from "../../cabecalho/cabecalho.page";
import { RodapePage } from "../../rodape/rodape.page";

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonListHeader, IonList, IonCardContent, IonCardSubtitle, IonText, IonCardTitle, IonCardHeader, IonCard, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CabecalhoPage, IonButton, RodapePage, IonThumbnail]
})
export class ServicosPage implements OnInit {

  servicos: any[] = [];

  constructor() { }

  ngOnInit() {
    this.servicos = [
      {
        id: 1,
        nome: 'Troca de Óleo',
        descricao: 'Troca de óleo e filtro de óleo',
        valor: 'R$ 120,00',
        imagem: 'https://atrialub.com.br/wp-content/uploads/2018/11/catalogo_fundo_lust.jpg'
      },
      {
        id: 2,
        nome: 'Alinhamento',
        descricao: 'Alinhamento e balanceamento',
        valor: 'R$ 150,00',
        imagem: 'https://www.veluplast.com.br/wp-content/uploads/2022/10/2022-11-21-alinhamento-3d-802x506.jpg'
      },
      {
        id: 3,
        nome: 'Revisão',
        descricao: 'Revisao completa',
        valor: 'R$ 200,00',
        imagem: 'https://amvbrasil.com.br/wp-content/uploads/2019/04/revisao-do-carro-protecao-veicular-amv-750x400.png'
      },
      {
        id: 4,
        nome: 'Troca de Pneus',
        descricao: 'Troca de pneus',
        valor: 'R$ 100,00',
        imagem: 'https://blog.autoglassonline.com.br/wp-content/uploads/2022/04/como-trocar-o-pneu.jpg'
      },
      {
        id: 5,
        nome: 'Troca de Pastilhas',
        descricao: 'Troca de pastilhas',
        valor: 'R$ 80,00',
        imagem: 'https://www.veluplast.com.br/wp-content/uploads/2022/10/2022-11-11-trocar-as-pastilhas-de-freio.jpg'
      },
      {
        id: 6,
        nome: 'Troca de Correia',
        descricao: 'Troca de correia',
        valor: 'R$ 120,00',
        imagem: 'https://www.rbautomotivo.com.br/wp-content/uploads/2023/03/img-quando-trocar-correia-dentada-de-motor.jpg'
      },
      {
        id: 7,
        nome: 'Troca de Filtro de Ar',
        descricao: 'Troca de filtro de ar',
        valor: 'R$ 50,00',
        imagem: 'https://s2-autoesporte.glbimg.com/LYJB1p24M-t_KRHhLn03G1vLhxM=/0x0:2121x1414/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/H/S/B9jwT7QPqgedSAfA5bbQ/296276-manutencao-de-arcondicionado-automotivo-confira-6-dicas-imperdiveis.jpg'
      }
    ]
  }}
