import * as Realm from "realm-web";
import React, { useState } from "react";
import PageHeader from "../../components/pageHeader/pageHeader";
import FloatingActionButton from "../../components/floatingActionButton/FloatingActionButton";
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
import CommunityCard from "../../components/communityCard/CommunityCard";
import SetCommunitiesList from "../../components/communitiesList/communitiesList";
const CommunitiesPage = () => (
  <IonPage>
<SetCommunitiesList></SetCommunitiesList>
    <FloatingActionButton></FloatingActionButton>
  </IonPage>
);

export default CommunitiesPage;
