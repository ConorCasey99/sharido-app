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
} from "@ionic/react";

import { getDocs, collection, query, where} from "firebase/firestore";
import { useAuthentication } from "../../contexts/authentication/AuthenticationContext";
import { db } from "../../firebase";


import {
  albumsOutline,
  peopleOutline,
  personOutline,
} from "ionicons/icons";

const AboutUs = () => {
    const [communityList, setCommunitiesList] = useState([]);
    const communitiesCollectionRef = collection(db, "communities");
    const { currentUser } = useAuthentication();
    const [usersList, setUsersList] = useState([]);
    const [postsList, setPostsList] = useState([]);
    const [user, setUser] = useState([]);
    const usersCollectionRef = collection(db, "users");
    const postsCollectionRef = collection(db, "posts");

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

   useEffect(() => {
     const getPosts = async () => {
       const posts = await getDocs(postsCollectionRef);
       setPostsList(posts.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     };
     getPosts();
   }, []);

   useEffect(() => {
     const queryUsers = async () => {
       const usersQuery = query(
         usersCollectionRef,
         where("userEmail", "==", currentUser?.email)
       );
       const usersQuerySnap = await getDocs(usersQuery);
       setUser(
         usersQuerySnap?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }))
       );
     };
     queryUsers();
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

  return (
    <IonContent>
      <IonGrid>
        <IonRow className="ion-justify-content-center">
          <IonCol className={styles.imageCard}>
            <IonCard className={styles.appHeader}>
              <IonCardContent>
                <IonRow>
                  <IonCol>
                    <img
                      src="/assets/images/logo.png"
                      alt="avatar"
                      className={styles.appIcon}
                    />
                    <h1 className={styles.aboutHeading}>Sharido</h1>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
 {user?.map((user) => {
        return (
        <IonRow>
          <IonCol>
            <IonCard className={styles.appCard}>
              <IonCardContent>
                <h1 className={styles.aboutHeading}>About Who We Are</h1>
                <p className={styles.aboutText}> Thank you {user?.userName} for being a member of Sharido!<br></br>
                We built this platform in order to encourage the spreading of knowledge and skills.
                This wouldn't be possible without users like you {user?.userName} and we wanted to thank you for
                beleiving in us enough to join and contribute to this social platform.</p>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
   );
      })}
        <IonRow>
          <IonCol>
            <IonCard className={styles.appCard}>
              <IonCardContent>
                <IonIcon className={styles.userIcon} icon={personOutline} />
                <IonCardTitle>{usersList.length}</IonCardTitle>
                <IonCardSubtitle>Users</IonCardSubtitle>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className={styles.appCard}>
              <IonCardContent>
                <IonIcon icon={peopleOutline} />
                <IonCardTitle>{communityList.length}</IonCardTitle>
                <IonCardSubtitle>Communities</IonCardSubtitle>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard className={styles.appCard}>
              <IonCardContent>
                <IonIcon icon={albumsOutline} />
                <IonCardTitle>{postsList.length}</IonCardTitle>
                <IonCardSubtitle>Posts</IonCardSubtitle>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default AboutUs;
