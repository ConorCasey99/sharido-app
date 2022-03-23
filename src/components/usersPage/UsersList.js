import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./usersList.module.scss";

import {
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonAvatar,
  IonPage,
  IonRouterLink,
  useIonActionSheet,
  IonButton,
  IonActionSheet,
} from "@ionic/react";

import { getDocs, collection} from "firebase/firestore";
import { db } from "../../firebase";
import { useAuthentication } from "../../contexts/authentication/AuthenticationContext";
export var Community_Name;

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const { currentUser } = useAuthentication();

  useEffect(() => {
    const getUsers = async () => {
      const users = await getDocs(usersCollectionRef);
      setUsersList(
        users.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getUsers();
  });

  const updateCommunity = async () => {};

  return (
    <div id="communityCards" className="communitiesPage">
      {usersList.map((user) => {
        return (
          <ion-card key={user.id}>
            <Link to={`/page/CommunityPage/${user.id}`}>
              <img className={styles.userIcon} key={user.id} src={user?.userPicture} alt="Avatar"></img>
            </Link>
            <ion-card-header>
              <ion-card-title>{user.userName}</ion-card-title>
            </ion-card-header>
            <ion-footer>
              <ion-row>
                <ion-col center text-center>
                  <button>
                    <ion-icon name="thumbs-up"></ion-icon>
                    <div>
                      Community Members: {user?.posts?.length}
                    </div>
                  </button>
                </ion-col>
                <ion-col center text-center></ion-col>
              </ion-row>
            </ion-footer>
          </ion-card>
        );
      })}
    </div>
  );
};

export default UsersList;
