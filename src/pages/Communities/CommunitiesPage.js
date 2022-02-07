import PageHeader from "../../components/pageHeader/pageHeader";
import FloatingActionButton from "../../components/floatingActionButton/FloatingActionButton";
import {
  IonContent,
  IonPage
  
} from "@ionic/react";
import SetCommunitiesList from "../../components/communitiesList/communitiesList";
const CommunitiesPage = () => (
  <IonPage>
    <IonContent>
      <PageHeader pageTitle={"Communities"}></PageHeader>
      <SetCommunitiesList></SetCommunitiesList>
      <FloatingActionButton></FloatingActionButton>
    </IonContent>
  </IonPage>
);

export default CommunitiesPage;
