import { useEffect, useState  } from "react";

import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAvatar,
} from "@ionic/react";
import { useLocation, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import {
  person,
  heartOutline,
  heartSharp,
  homeOutline,
  home,
  gitNetwork,
  gitNetworkOutline,
  book,
  keypad,
  information
} from "ionicons/icons";
import './Menu.css';
import firebase from '../firebase'
import { db } from '../firebase'
import { getDocs, query, collection, where } from "firebase/firestore";
interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/page/Home",
    iosIcon: homeOutline,
    mdIcon: home,
  },
  {
    title: "All Communities",
    url: "/page/Communities",
    iosIcon: gitNetworkOutline,
    mdIcon: gitNetwork,
  },
  {
    title: "Community Categories",
    url: "/page/CommunityCategories",
    iosIcon: keypad,
    mdIcon: keypad,
  },
  {
    title: "Followed Communities",
    url: "/page/FollowedCommunities",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "Users",
    url: "/page/UsersPage",
    iosIcon: person,
    mdIcon: person,
  },
  {
    title: "Classes",
    url: "/page/Classes",
    iosIcon: book,
    mdIcon: book,
  },
  {
    title: "About Us",
    url: "/page/About",
    iosIcon: information,
    mdIcon: information,
  },
];



const Menu: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const user = firebase.auth().currentUser;
  const email = user?.email;
  var isLoggedIn = false;

  const [userProfile, setUserProfile] = useState([]);
  const usersCollectionRef = collection(db, "users");

   async function handleLogout() {
    try {
       await signOut();
       await presentLoading();
       history.push("/page/Login");
     } catch {
       signOutAlert();
     }
     setLoading(false);
   }

   async function presentLoading() {
     const loading = document.createElement("ion-loading");

     loading.cssClass = "my-custom-class";
     loading.message = "Signing Out";
     loading.duration = 1000;

     document.body.appendChild(loading);
     await loading.present();

     const { role, data } = await loading.onDidDismiss();
     console.log("Loading dismissed!");
   }

    async function signOutAlert() {
      const alert = document.createElement("ion-alert");
      alert.cssClass = "my-custom-class";
      alert.header = "Alert";
      alert.subHeader = "";
      alert.message = "Error Signing Out!";
      alert.buttons = ["OK"];

      document.body.appendChild(alert);
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    }

    function signOut() {
      return auth.signOut();
    }

  return (
    <IonMenu side="start" contentId="main" type="overlay">
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>Sharido</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img
          className="userProfilePic"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgladstoneentertainment.com%2Fwp-content%2Fuploads%2F2018%2F05%2Favatar-placeholder-450x450.gif&f=1&nofb=1"
          alt="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgladstoneentertainment.com%2Fwp-content%2Fuploads%2F2018%2F05%2Favatar-placeholder-450x450.gif&f=1&nofb=1"
        ></img>
        <IonLabel className="userEmail">{email}</IonLabel>
        <IonButton
          color="primary"
          routerLink="/page/Login"
          routerDirection="forward"
          className="loginButton"
        >
          Login
        </IonButton>
        <IonButton
          color="primary"
          routerLink="/page/Registration"
          routerDirection="forward"
          className="registerButton2"
          disabled={isLoggedIn}
        >
          Registration
        </IonButton>

        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />

                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonButton
          color="primary"
          onClick={handleLogout}
          routerDirection="forward"
          disabled={loading}
        >
          Sign Out
        </IonButton>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
