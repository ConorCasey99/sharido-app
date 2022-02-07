import react from "react";
import './pageHeader.css'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenuButton,
  IonGrid,
  IonCol,
  IonContent,
  IonPage
} from "@ionic/react";

const PageHeader = ({pageTitle}) => {
  return (
        <IonHeader collapse="fade" translucent={true}>
          <IonToolbar>
            <IonTitle>{pageTitle}</IonTitle>
          </IonToolbar>
        </IonHeader> 
  );
};

export default PageHeader;