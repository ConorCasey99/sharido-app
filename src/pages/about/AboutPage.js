import PageHeader from "../../components/pageHeader/pageHeader";
import AboutUs from "../../components/aboutUs/aboutUs";

import { IonContent, IonPage } from "@ionic/react";

const AboutPage = () => (
  <IonPage>
    <IonContent>
      <PageHeader pageTitle={"About Us"}></PageHeader>
      <AboutUs></AboutUs>
    </IonContent>
  </IonPage>
);

export default AboutPage;
