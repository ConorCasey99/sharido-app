import PageHeader from "../../components/pageHeader/pageHeader";
import { IonContent, IonPage } from "@ionic/react";
import UsersList from "../../components/usersPage/UsersList";

const UsersPage = () => (
  <IonPage>
    <IonContent>
      <PageHeader pageTitle={"Users"}></PageHeader>
      <UsersList></UsersList>
    </IonContent>
  </IonPage>
);

export default UsersPage;
