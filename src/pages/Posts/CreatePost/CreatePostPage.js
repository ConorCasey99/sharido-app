import React from "react";
import CreatePostMenu from "../../../components/createPostMenu/createPostMenu";
import {
  IonContent,
  IonPage
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
