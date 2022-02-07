import react, {useState, useEffect} from "react";

import {
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent
} from "@ionic/react";

import firebase from "../../firebase";


const CommunityCard = ({communityName,communityDescription,communityCategory,commmunityPic,}) => {

  const [communityList, setCommunitiesList] = useState([]);





    return (
      <ion-card>
        <ion-card-header>
          <ion-icon name="pin" slot="start"></ion-icon>
          <ion-card-title>{communityName}</ion-card-title>
          <ion-card-subtitle>{communityCategory}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>{communityDescription}</ion-card-content>
      </ion-card>
    );
}

export default CommunityCard;