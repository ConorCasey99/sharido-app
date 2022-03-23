import { useState  } from "react";

import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { useAuthentication } from "../contexts/authentication/AuthenticationContext";
import { useLocation, useHistory } from "react-router-dom";
import { auth } from "../../src/firebase";
import {
  archiveOutline,
  person,
  archiveSharp,
  heartOutline,
  heartSharp,
  homeOutline,
  home,
  gitNetwork,
  gitNetworkOutline,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  exit, 
  book,
  keypad,
  information
} from "ionicons/icons";
import './Menu.css';
import { signOut } from "firebase/auth";

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
        <IonButton
          color="primary"
          routerLink="/page/Login"
          routerDirection="forward"
        >
          Login
        </IonButton>
        <IonButton
          color="primary"
          routerLink="/page/Registration"
          routerDirection="forward"
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
