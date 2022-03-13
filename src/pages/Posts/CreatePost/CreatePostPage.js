import * as Realm from "realm-web";
import React, { useState } from "react";
import CreatePostMenu from "../../../components/createPostMenu/createPostMenu";
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
  IonPage,
} from "@ionic/react";
import PageHeader from "../../../components/pageHeader/pageHeader";

const CreatePostPage = () => (
  <IonPage>
    <IonContent>
      <PageHeader pageTitle={"Make A Post!"}></PageHeader>
      <CreatePostMenu></CreatePostMenu>
    </IonContent>
  </IonPage>
);
export default CreatePostPage;
