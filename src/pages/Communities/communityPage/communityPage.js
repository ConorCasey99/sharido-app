
import PageHeader from "../../../components/pageHeader/pageHeader";
import { IonContent, IonPage } from "@ionic/react";
import PostList
 from "../../../components/communityPage/postList";
const CommunityPage = () => (
  <IonPage>
    <IonContent>
      <PageHeader pageTitle={"Communities"}></PageHeader>
      <PostList></PostList>
    </IonContent>
  </IonPage>
);

export default CommunityPage;
