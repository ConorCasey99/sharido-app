import PageHeader from "../../components/pageHeader/pageHeader";
import AboutUs from "../../components/aboutUs/aboutUs";

import { IonContent, IonPage } from "@ionic/react";

const AboutPage = () => (
  <IonPage>
      <PageHeader pageTitle={"About Us"}></PageHeader>
      <AboutUs></AboutUs>

  </IonPage>
);

export default AboutPage;
