import React from "react";
import PostPageComponent from "../../../components/postPage/postPageComponent";
import {
  IonContent,
  IonPage,
} from "@ionic/react";
import PageHeader from "../../../components/pageHeader/pageHeader";

const PostPage = () => (
  <IonPage>
    <IonContent>
      <PageHeader pageTitle={""}></PageHeader>
      <PostPageComponent></PostPageComponent>
    </IonContent>
  </IonPage>
);
export default PostPage;
