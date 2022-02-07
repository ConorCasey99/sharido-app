import React, { useState, useEffect, useRef } from "react";

import {
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonAvatar
} from "@ionic/react";

import firebase from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../../firebase";

const SetCommunitiesList = () => {
  const [communityList, setCommunitiesList] = useState([]);
  const communitiesCollectionRef = collection(db, "communities");

  useEffect(() => {
    const getCommunities = async () => {
      const communities = await getDocs(communitiesCollectionRef);
      setCommunitiesList(communities.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getCommunities();
  });

  return <div className="communitiesPage">{communityList.map((community) => { 
      return (
        <ion-card>
          <img
            src="https://media.istockphoto.com/photos/circle-around-the-word-community-picture-id174647392"
            alt="ion"
          ></img>
          <ion-card-header>
            <ion-card-title>{community.communityName}</ion-card-title>
          </ion-card-header>
          <ion-card-subtitle>{community.communityCategory}</ion-card-subtitle>
          <ion-card-content>{community.communityDescription}</ion-card-content>
          <ion-footer>
            <ion-row>
              <ion-col center text-center>
                <button>
                  <ion-icon name="thumbs-up"></ion-icon>
                  <div>600 members</div>
                </button>
              </ion-col>
              <ion-col center text-center></ion-col>
            </ion-row>
          </ion-footer>
        </ion-card>
      );
  })}</div>
};

export default SetCommunitiesList;
