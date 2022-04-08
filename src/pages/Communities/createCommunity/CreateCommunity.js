import React from "react";
import CreateCommunityMenu from "../../../components/createCommunityMenu/createCommunityMenu"
import {

  IonContent,
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
