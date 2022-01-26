import React, { useRef, useState } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';
import LoginCard from "../../components/authentication/login/LoginCard";

import "./login.css";

import PageHeader from "../../components/pageHeader/pageHeader";

const LoginPage = () => (
  <IonPage>
    <IonContent>
      <LoginCard></LoginCard>
    </IonContent>
  </IonPage>
);
export default LoginPage;