import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import RegistrationCard from "../../components/authentication/registration/Registration";
import "./Registration.css";

const RegistrationPage = () => {
  return (
    <IonPage>
      <IonContent>
        <RegistrationCard></RegistrationCard>
      </IonContent>
    </IonPage>
  );
};

export default RegistrationPage;
