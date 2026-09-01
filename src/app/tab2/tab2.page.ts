import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard,IonCardContent, IonCardHeader,
   IonCardSubtitle, IonCardTitle,IonItem,
  IonLabel,
  IonList, } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, 
     IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonCard,
        IonCardContent,
        IonCardHeader,
       
        IonCardTitle,
       
       
  ]
})
export class Tab2Page {

  constructor() {}

}
