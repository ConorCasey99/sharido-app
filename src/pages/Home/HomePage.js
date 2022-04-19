import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import {
  IonToolbar,
  IonTitle,
  IonContent,
  IonHeader,
  IonPage,
} from "@ionic/react";

const HomePage = () => (
  <IonPage>
    <IonHeader collapse="fade" translucent={true}>
      <IonToolbar color="primary">
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <Dashboard></Dashboard>
    </IonContent>
  </IonPage>
);
export default HomePage;