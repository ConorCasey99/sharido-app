import React, { useRef, useState } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';


import "./login.css";

import PageHeader from "../../components/pageHeader/pageHeader";

const LoginPage = () => (
  <>
  <IonContent id='loginContent'>
    <PageHeader pageTitle={"Login"}></PageHeader>
  </IonContent>
  </>
);
export default LoginPage;