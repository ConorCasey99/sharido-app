import PageHeader from "../../components/pageHeader/pageHeader";
import { IonContent, IonPage } from "@ionic/react";
import UserPage from "../../../components/userPage/UserPage";

const UsersPage = () => (
  <IonPage>
    <IonContent>
      <PageHeader pageTitle={"User"}></PageHeader>
      <UserPage></UserPage>
    </IonContent>
  </IonPage>
);

export default UsersPage;
