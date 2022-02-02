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

const CreateCommunityPage = () => (
  <>
  <IonPage>
    <IonContent>
        <CreateCommunityMenu></CreateCommunityMenu>
    </IonContent>
  </IonPage>
  </>
);
export default CreateCommunityPage;
