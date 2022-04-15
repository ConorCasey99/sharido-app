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
                src="https://cdn-icons.flaticon.com/png/512/745/premium/745154.png?token=exp=1650041808~hmac=a23b2ebf6c8ac07b5468af69519adaa4"
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
                src="https://cdn-icons-png.flaticon.com/512/718/718970.png"
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
                src="https://cdn-icons-png.flaticon.com/512/3791/3791146.png"
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
                src="https://cdn-icons.flaticon.com/png/512/210/premium/210545.png?token=exp=1650041996~hmac=7c60ab8df4869047e7f2f679024fe863"
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
