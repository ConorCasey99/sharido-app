import PageHeader from "../../../components/pageHeader/pageHeader";
import { IonContent, IonPage } from "@ionic/react";
import CommunityCategory from "../../../components/communityCategory/communityCategory";

const CommunityCategoryPage = () => (
  <IonPage>
    <PageHeader pageTitle={"Community Category"}></PageHeader>
    <IonContent>
      <CommunityCategory></CommunityCategory>
    </IonContent>
  </IonPage>
);

export default CommunityCategoryPage;
