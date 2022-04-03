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

  return (
    <div id="communityCards" className={styles.usersPage}>
      {usersList.map((user) => {
        return (
          <ion-card className={styles.userCard} key={user.userName}>
            <Link to={`/page/User/${user.userName}`}>
              <img
                className={styles.userIcon}
                key={user.userName}
                src={user?.userPicture}
                alt="Avatar"
              ></img>
            </Link>
            <ion-card-header className={styles.userName}>
              <ion-card-title className={styles.userName}>
                {user.userName}
              </ion-card-title>
            </ion-card-header>
            <ion-footer>
              <ion-row>
                <ion-col center text-center>
                  <button>
                    <ion-icon name="thumbs-up"></ion-icon>
                    <div>Users Posts: {user?.posts?.length}</div>
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
