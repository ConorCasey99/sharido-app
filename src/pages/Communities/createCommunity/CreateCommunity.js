import * as Realm from "realm-web";
import React, { useState } from "react";
import CreateCommunityMenu from "../../../components/createCommunityMenu/createCommunityMenu"
import {
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonHeader,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonMenuButton,
  IonPage
} from "@ionic/react";
import PageHeader from "../../../components/pageHeader/pageHeader";

const CreateCommunityPage = () => (
  
  <IonPage>
    <IonContent>
      <PageHeader pageTitle={"Create Community"}></PageHeader>
        <CreateCommunityMenu></CreateCommunityMenu>
    </IonContent>
  </IonPage>

);
export default CreateCommunityPage;
