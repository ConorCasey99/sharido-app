import React, {useState, useRef} from 'react';
import PageHeader from '../../pageHeader/pageHeader';
import "./RegistrationCard.css";
import { useAuthentication } from '../../../contexts/authentication/AuthenticationContext';
import { useLocation, useHistory } from "react-router-dom";
import AlertComponent from '../../alertComponent/alertComponent';
import app from "../../../firebase"

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
  IonAlert,
  alertController
} from "@ionic/react";

import { EmailAuthCredential, auth } from 'firebase/auth';
import { toastController } from '@ionic/core';
import { addDoc, collection } from 'firebase/firestore';
import { db } from "../../../firebase";


const Registration = () => {

  const {registerUser} = useAuthentication();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const checkPasswordRef = useRef();
  const usernameRef = useRef();
  const [userId, setUserId] = useState();
  const { currentUser } = useAuthentication();

  //const [warning, setWarning] = useRef();
  const history = useHistory()

  async function handleRegister(e) {
    if (passwordRef.current.value !== checkPasswordRef.current.value) {
      passwordAlert();
    }
    try {
      setLoading(true);
      await registerUser(emailRef.current.value, passwordRef.current.value);
      setUserId(currentUser?.uid)
      addUserDetails(emailRef, usernameRef, userId);
      history.push("/page/Login");
    } catch {
     console.log(e)
    }
    setLoading(false);
  }

  const addUserDetails = () => {
      const usersCollectionRef = collection(db, "users");
      addDoc(usersCollectionRef, {
      userEmail: emailRef.current.value,
      userName: usernameRef.current.value,
      userId: userId
    });
  }

  async function passwordAlert() {
    const alert = document.createElement("ion-alert");
    alert.cssClass = "my-custom-class";
    alert.header = "Alert";
    alert.subHeader = "";
    alert.message = "Passwords do not match!";
    alert.buttons = ["OK"];

    document.body.appendChild(alert);
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  




  













  
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
              <ion-input
               type="text"
               id="username"
               ref={usernameRef}>
               </ion-input>
            </ion-item>
          </div>
          <div class="form-input">
            <icon-icon name="md-mail"></icon-icon>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input
                type="email"
                id="email"
                ref={emailRef}
              ></ion-input>
            </ion-item>
          </div>
          <div class="form-input">
            <icon-icon name="md-eye-off"></icon-icon>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input
                type="password"
                id="password"
                ref={passwordRef}
              ></ion-input>
            </ion-item>
          </div>
          <div class="form-input">
            <icon-icon name="md-eye-off"></icon-icon>
            <ion-item>
              <ion-label position="floating">Repeat Password</ion-label>
              <ion-input 
              type="password" 
              ref={checkPasswordRef}>
              </ion-input>
            </ion-item>
          </div>
        </div>
        <div class="action-button ion-padding">
          <ion-button
            disabled={loading}
            size="large"
            class="register-button"
            onClick={handleRegister}
          >
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

export default Registration;
