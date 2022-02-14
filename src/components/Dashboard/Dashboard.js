import { updateCurrentUser } from "firebase/auth";
import react from "react";
import { useAuthentication } from "../../contexts/authentication/AuthenticationContext";
import { IonAvatar } from "@ionic/react";

const Dashboard = () => {
  
  const{currentUser} = useAuthentication()
  
    return (
      <ion-card>
        <ion-card-header>
          <IonAvatar>{currentUser?.userProfile}</IonAvatar>
          <ion-card-subtitle>Welcome Back:</ion-card-subtitle>
          <ion-card-title>{currentUser?.email}</ion-card-title>
        </ion-card-header>
      </ion-card>
    );
};

export default Dashboard;
