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
    <>
      <IonPage>
        <IonHeader collapse="fade" translucent={true}>
          <IonToolbar>
            <IonTitle>{pageTitle}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen={true}>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Header</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonContent>
      </IonPage>
    </>
  );
};

export default PageHeader;