import React from "react";
import { IonContent, IonPage } from '@ionic/react';
import LoginCard from "../../components/authentication/login/LoginCard";
import "./login.css";

const LoginPage = () => (
  <IonPage>
    <IonContent>
      <LoginCard></LoginCard>
    </IonContent>
  </IonPage>
);
export default LoginPage;