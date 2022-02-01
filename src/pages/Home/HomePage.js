import * as Realm from "realm-web";
import React from "react";
import PageHeader from "../../components/pageHeader/pageHeader";
import Dashboard from "../../components/Dashboard/Dashboard";
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
  IonPage,
} from "@ionic/react";

const HomePage = () => (
  <IonPage>
    <IonHeader collapse="fade" translucent={true}>
      <IonToolbar>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <Dashboard></Dashboard>
    </IonContent>
  </IonPage>
);
export default HomePage;