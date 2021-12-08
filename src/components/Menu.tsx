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

import { useLocation } from 'react-router-dom';
import {
  archiveOutline,
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
} from "ionicons/icons";
import './Menu.css';

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
    title: "Communities",
    url: "/page/Communities",
    iosIcon: gitNetworkOutline,
    mdIcon: gitNetwork,
  },
  {
    title: "Followed Communities",
    url: "/page/Followed",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

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
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
