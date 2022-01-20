import React from 'react';
import PageHeader from '../../pageHeader/pageHeader';
import "./RegistrationCard.css";

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
  IonList
 
} from "@ionic/react";

const RegistrationCard = () => {
  return (
    <IonContent>
      <div className="registration-section ion-padding">
        <div class="heading ion-padding">
          <h1>Sharido</h1>
          <p>Register Your Account!</p>
        </div>
        <div class="register-card ion-padding">
          <div class="form-input">
            <icon-icon name="md-eye-off"></icon-icon>
            <ion-item>
              <ion-label position="floating">Username</ion-label>
              <ion-input type="text"></ion-input>
            </ion-item>
          </div>
          <div class="form-input">
            <icon-icon name="md-mail"></icon-icon>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input type="email"></ion-input>
            </ion-item>
          </div>
          <div class="form-input">
            <icon-icon name="md-eye-off"></icon-icon>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input type="password"></ion-input>
            </ion-item>
          </div>
          <div class="form-input">
            <icon-icon name="md-eye-off"></icon-icon>
            <ion-item>
              <ion-label position="floating">Repeat Password</ion-label>
              <ion-input type="password"></ion-input>
            </ion-item>
          </div>
        </div>
        <div class="action-button ion-padding">
          <ion-button size="large" class="register-button">
            Register
          </ion-button>
          <p>Already have an account?</p>
          <ion-button
            class="login-button"
            size="large"
            fill="outline"
            routerLink="/page/Login"
            routerDirection="forward"
          >
            Login
          </ion-button>
        </div>
      </div>
    </IonContent>
  );
};

export default RegistrationCard;
