
import PageHeader from "../../../components/pageHeader/pageHeader";
import { IonContent, IonPage } from "@ionic/react";
import PostList
 from "../../../components/communityPage/postList";
import AddPostButton from "../../../components/addPostButton/addPostButton";

const CommunityPage = () => (
  <IonPage>
    <IonContent>
      <PageHeader pageTitle={""}></PageHeader>
      <PostList></PostList>
      <AddPostButton></AddPostButton>
    </IonContent>
  </IonPage>
);

export default CommunityPage;
