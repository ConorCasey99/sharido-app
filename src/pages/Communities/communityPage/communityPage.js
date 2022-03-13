
import PageHeader from "../../../components/pageHeader/pageHeader";
import { IonContent, IonPage } from "@ionic/react";
import PostList
 from "../../../components/communityPage/postList";
import { useParams } from "react-router";
import AddPostButton from "../../../components/addPostButton/addPostButton";
import { Link } from "react-router-dom";

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
