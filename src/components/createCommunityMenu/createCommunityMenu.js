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

const LoginCard = () => {
  const [loading, setLoading] = useState(false);
  const communityTitleRef = useRef();
  const communityDescriptionRef = useRef();

  function handleCreate(){

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

export default LoginCard;
