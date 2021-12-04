import CommunityCard from "../../components/CommunityCard";
import * as Realm from "realm-web";
import React from "react";

import {
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonHeader,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";

const HomePage = () => (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Home Page</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Home Page</IonCardSubtitle>
          <IonCardTitle>Welcome Home</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Sample</p>

        </IonCardContent>
      </IonCard>
    </IonContent>
  </>
);
export default HomePage;