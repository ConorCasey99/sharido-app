import PageHeader from "../../../components/pageHeader/pageHeader";
import { IonContent, IonPage } from "@ionic/react";
import CommunityCategoriesList from "../../../components/communityCategories/CommunityCategoriesList";
const CommunityCategories = () => (
  <IonPage>
    <PageHeader pageTitle={"Community Categories"}></PageHeader>
    <IonContent>
      <CommunityCategoriesList></CommunityCategoriesList>
      <br></br>
    </IonContent>
  </IonPage>
);

export default CommunityCategories;
