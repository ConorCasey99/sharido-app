import React, { useState, useEffect, useRef } from "react";

import {
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
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
          <ion-card-header>
            <ion-icon name="pin" slot="start"></ion-icon>
            <ion-card-title>{community.communityName}</ion-card-title>
            <ion-card-subtitle>{community.communityCategory}</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>{community.communityDescription}</ion-card-content>
        </ion-card>
      );
  })}</div>
};

export default SetCommunitiesList;
