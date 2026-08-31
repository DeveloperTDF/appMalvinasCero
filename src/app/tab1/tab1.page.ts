import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle,
   IonContent, IonCard,IonCardContent, IonCardHeader,
   IonCardSubtitle, IonCardTitle,IonItem,
  IonLabel,
  IonList, } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonList,
    IonLabel,
    IonItem,
    // ExploreContainerComponent
  ],
})
export class Tab1Page {
  constructor() {}
}
