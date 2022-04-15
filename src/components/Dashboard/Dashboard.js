import { Link } from "react-router-dom";
import styles from "./Dashboard.module.scss"
import {
  IonImg,
  IonContent,
  IonPage,
  IonCol,
  IonRow,
  IonGrid,
  IonButton,
  IonPopover,
} from "@ionic/react";

const Dashboard = () => {
  return (
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-card>
            <Link to={`/page/Communities`}>
              <IonImg
                className={styles.menuOptionPic}
                src="assets\images\group.png"
              ></IonImg>
            </Link>
            <ion-card-header>
              <ion-card-title>All Communities</ion-card-title>
            </ion-card-header>
          </ion-card>
        </ion-col>
        <ion-col>
          <ion-card>
            <Link to={`/page/CommunityCategories`}>
              <IonImg
                className={styles.menuOptionPic}
                src="assets\images\categories.png"
              ></IonImg>
            </Link>
            <ion-card-header>
              <ion-card-title>Categories</ion-card-title>
            </ion-card-header>
          </ion-card>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-card>
            <Link to={`/page/UsersPage`}>
              <IonImg
                className={styles.menuOptionPic}
                src="assets\images\users.png"
              ></IonImg>
            </Link>
            <ion-card-header>
              <ion-card-title>Users</ion-card-title>
            </ion-card-header>
          </ion-card>
        </ion-col>
        <ion-col>
          <ion-card>
            <Link to={`/page/FollowedCommunities`}>
              <IonImg
                className={styles.menuOptionPic}
                src="assets\images\heart.png"
              ></IonImg>
            </Link>
            <ion-card-header>
              <ion-card-title>Followed</ion-card-title>
            </ion-card-header>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  );
};

export default Dashboard;
