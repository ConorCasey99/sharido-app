import * as Realm from "realm-web";
import React from "react";
import PageHeader from "../../components/pageHeader/pageHeader";
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
    <PageHeader pageTitle={"Home"}></PageHeader>
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