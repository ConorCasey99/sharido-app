import react from "react";
import './pageHeader.css'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";

const PageHeader = ({pageTitle}) => {
  return (
    <IonHeader collapse="fade" translucent={true}>
      <IonToolbar color="primary">
        <IonTitle>{pageTitle}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeader;