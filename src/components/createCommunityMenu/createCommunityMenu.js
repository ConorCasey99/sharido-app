import React, { useState, useRef } from "react";

import {
  IonCard,
  IonInput,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonCardContent,
  IonList,
  IonRouterLink,
  IonAccordionGroup, 
  IonLabel,
  IonAvatar
} from "@ionic/react";

import { useHistory } from "react-router";
import {db} from '../../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { useAuthentication } from "../../contexts/authentication/AuthenticationContext";

const CreateCommunityMenu = ({community}) => {
  const [loading, setLoading] = useState(false);
  const communityTitleRef = useRef();
  const communityDescriptionRef = useRef();
  const communityCategoryRef = useRef();
  const { currentUser } = useAuthentication();
  const communitiesCollectionRef = collection(db, "communities");

  async function handleCreate(){
     presentLoading()
     await addDoc(communitiesCollectionRef, {
        communityName: communityTitleRef.current.value, 
        communityDescription: communityDescriptionRef.current.value, 
        communityCategory: communityCategoryRef.current.value,
        communityMembers: [
          currentUser.email
        ], 
        admin: currentUser.email});
     community = communitiesCollectionRef
  }

  function loadUsers(){
    
  }

  async function presentLoading() {
    const loading = document.createElement("ion-loading");

    loading.cssClass = "my-custom-class";
    loading.message = "Creating Community!";
    loading.duration = 2000;

    document.body.appendChild(loading);
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed!");
  }


  function uploadCommunityAvatar(imageURI) {

  }

  function openImagePicker() {
     
  }
 
  return (
    <IonPage>
      <IonContent>
        <div className="registration-section ion-padding">
          <div class="heading ion-padding">
            <h1>Create a Community!</h1>
          </div>
          <div class="register-card ion-padding">
            <IonAvatar>
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <div class="form-input">
              <icon-icon name="md-mail"></icon-icon>
              <ion-item>
                <ion-label position="floating">Community Name</ion-label>
                <ion-input
                  id="title"
                  ref={communityTitleRef}
                  type="text"
                ></ion-input>
              </ion-item>
            </div>
            <div class="form-input">
              <icon-icon name="md-eye-off"></icon-icon>
              <ion-item>
                <ion-label position="floating">Community Description</ion-label>
                <ion-input
                  ref={communityDescriptionRef}
                  type="description"
                ></ion-input>
              </ion-item>
            </div>
          </div>
          <ion-item>
            <ion-label>Community Category</ion-label>
            <ion-select ref={communityCategoryRef} interface="action-sheet" class="custom-options">
              <ion-select-option value="Mobile_Techology">
                Mobile Technology
              </ion-select-option>
              <ion-select-option value="Automotive">
                Automotive
              </ion-select-option>
              <ion-select-option value="Health_and_Fitness">
                Health and Fitness
              </ion-select-option>
              <ion-select-option value="Arts_and_Crafts">
                Arts and Crafts
              </ion-select-option>
              <ion-select-option value="Tv_and_Film">
                Film and Tv
               </ion-select-option>
              <ion-select-option value="Cooking">
                Cooking
              </ion-select-option>
              <ion-select-option value="Gaming">
                Gaming
              </ion-select-option>
              <ion-select-option value="Music">
                Music
              </ion-select-option>
            </ion-select>
          </ion-item>
          <div class="action-button ion-padding">
            <ion-button
              size="large"
              class="register-button"
              onClick={handleCreate}
              disabled={loading}
            >
              Upload Community Picture
            </ion-button>
            <ion-button
              size="large"
              class="register-button"
              onClick={handleCreate}
              disabled={loading}
            >
              Create Community
            </ion-button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CreateCommunityMenu;
