import * as Realm from "realm-web";
import React, { useState } from "react";
import PageHeader from "../../components/pageHeader/pageHeader";
import CommunityCard from "../../components/communityHeader/communityCard";
import {
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonHeader,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonMenuButton
  
} from "@ionic/react";

const CommunitiesPage = () => (
  <>
    <PageHeader pageTitle={"Communities"}></PageHeader>
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Vue.js</IonCardSubtitle>
          <IonCardTitle>Ionic 4 and Vue.js</IonCardTitle>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>REACT</IonCardSubtitle>
          <IonCardTitle>Ionic 4 and React</IonCardTitle>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>ANGULAR</IonCardSubtitle>
          <IonCardTitle>Ionic 4 and Angular</IonCardTitle>
        </IonCardHeader>
      </IonCard>
      <CommunityCard community={"Home"}></CommunityCard>
    </IonContent>
  </>
);
export default CommunitiesPage;
