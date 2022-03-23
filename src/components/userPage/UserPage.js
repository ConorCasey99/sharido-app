import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  getDocs,
  deleteDoc,
  doc,
  query,
  collection,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router";

const UserPage = () => {
  //const [postList, setUsersList] = useState([]);
  const usersCollectionRef = collection(db, "users");
  let userParam = useParams().userName;
  const [userProfile , setUserProfile] = useState("")

  useEffect(() => {
    const queryUsers = async () => {
      const usersQuery = query(
        usersCollectionRef,
        where("userName", "==", userParam)
      );
      const usersQuerySnap = await getDocs(usersQuery);
      setUserProfile(usersQuerySnap.doc((doc) => ({ ...doc.data(), id: doc.id })));
    };
    queryUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  console.log(userParam)

  return (
    <div id="communityCards" className="communitiesPage">
      <ion-card class="postcard" key={userProfile.id}>
        <img
          key={userProfile.id}
          src={userProfile?.userPicture}
          alt="ion"
        ></img>

        <ion-card-header>
          <ion-card-title>{userProfile.userName}</ion-card-title>
        </ion-card-header>
        <ion-footer>
          <ion-row>
    
            <ion-col center text-center></ion-col>
          </ion-row>
        </ion-footer>
      </ion-card>
      )
    </div>
  );
};

export default UserPage;
