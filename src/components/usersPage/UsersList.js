import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./usersList.module.scss";

import { getDocs, collection} from "firebase/firestore";
import { db } from "../../firebase";
export var Community_Name;

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const history = useHistory();

  useEffect(() => {
    const getUsers = async () => {
      const users = await getDocs(usersCollectionRef);
      setUsersList(
        users.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getUsers();
  }, []);

  const openUserPage = (userName) => {
    history.replace(`/page/Users/${userName}`);
  }

  return (
    <div id="communityCards" className={styles.usersPage}>
      {usersList.map((user) => {
        return (
          <ion-grid>
            <ion-row>
              <ion-col class="ion-align-self-center" size-md="5" push-md="3">
                <ion-card className={styles.userCard} key={user.userName}>
                  <a href={`/page/Users/${user.userName}`}>
                    <img
                      key={user.userName}
                      className={styles.userIcon}
                      src={user?.userPicture}
                      alt="User Profile Pic"
                    ></img>
                  </a>
                  <ion-card-header className={styles.userName}>
                    <ion-card-title className={styles.userName}>
                      {user.userName}
                    </ion-card-title>
                  </ion-card-header>
                 
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        );
      })}
    </div>
  );
};

export default UsersList;
