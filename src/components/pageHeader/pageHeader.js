import react from "react";
import './pageHeader.css'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenuButton,
  IonGrid,
  IonCol
} from "@ionic/react";

const PageHeader = ({pageTitle}) => {
  return (
    <IonHeader>
      <IonToolbar color="danger">
        <IonGrid>
          <IonCol>
            <IonMenuButton></IonMenuButton>
          </IonCol>
          <IonCol>
            <IonTitle>{pageTitle}</IonTitle>
          </IonCol>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeader;