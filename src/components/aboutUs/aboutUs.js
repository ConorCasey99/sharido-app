import React, { useState, useEffect } from "react";
import styles from "./AboutUs.module.scss";

import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
} from "@ionic/react";

import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { useAuthentication } from "../../contexts/authentication/AuthenticationContext";
import { db } from "../../firebase";


import {
  bookmarkOutline,
  imageOutline,
  person,
} from "ionicons/icons";

const AboutUs = () => {
    const [communityList, setCommunitiesList] = useState([]);
    const communitiesCollectionRef = collection(db, "communities");
    const { currentUser } = useAuthentication();
    const [usersList, setUsersList] = useState([]);
    const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getCommunities = async () => {
      const communities = await getDocs(communitiesCollectionRef);
      setCommunitiesList(
        communities.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getCommunities();
  }, []);

   

   useEffect(() => {
     const getUsers = async () => {
       const users = await getDocs(usersCollectionRef);
       setUsersList(users.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     };
     getUsers();
   }, []);





















  return (
      <IonContent>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol
              className={styles.imageCard}
            >
              <IonCard className={styles.appHeader}>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      <img
                        src="/assets/images/logo.png"
                        alt="avatar"
                        className={styles.appIcon}
                      />
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard className={styles.appCard}>
                <IonCardContent>
                  <IonIcon icon={person} />
                  <IonCardTitle>{usersList.length}</IonCardTitle>
                  <IonCardSubtitle>Users</IonCardSubtitle>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard className={styles.appCard}>
                <IonCardContent>
                  <IonIcon icon={bookmarkOutline} />
                  <IonCardTitle>{communityList.length}</IonCardTitle>
                  <IonCardSubtitle>Communities</IonCardSubtitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
  );
};

export default AboutUs;
