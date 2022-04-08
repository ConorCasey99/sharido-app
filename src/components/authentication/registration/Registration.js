import React, {useState, useRef} from 'react';
import styles from "./Registration.module.scss";
import { useAuthentication } from '../../../contexts/authentication/AuthenticationContext';
import { useHistory } from "react-router-dom";
import "./RegistrationCard.css";

import {
  IonContent,
} from "@ionic/react";

import { addDoc, collection } from 'firebase/firestore';
import { db } from "../../../firebase";
import { storage } from "../../../firebase";


const RegistrationCard = () => {

  const {registerUser} = useAuthentication();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const checkPasswordRef = useRef();
  const usernameRef = useRef();
  const [userId, setUserId] = useState();
  const { currentUser } = useAuthentication();
  const [image, setImage] = useState(null);
  const [pictureUrl, setPictureUrl] = useState("");

  //const [warning, setWarning] = useRef();
  const history = useHistory()

  async function handleRegister(e) {
    if (passwordRef.current.value !== checkPasswordRef.current.value) {
      passwordAlert();
    }
    try {
      await registerUser(emailRef.current.value, passwordRef.current.value);
      setUserId(currentUser?.uid)
      addUserDetails(emailRef, usernameRef, userId, pictureUrl);
      history.push("/page/Login");
    } catch {
     console.log(e)
    }
    setLoading(false);
  }

  async function addUserDetails () {
      const usersCollectionRef = collection(db, "users");
     await addDoc(usersCollectionRef, {
        userEmail: emailRef.current.value,
        userName: usernameRef.current.value,
        userId: userId,
        userPicture: pictureUrl,
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

    const handleChange = (e) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };

     const handleUploadPicture = () => {
       const uploadTask = storage.ref(`images/${image.name}`).put(image);
       uploadTask.on(
         "state change",
         (snapshot) => {},
         (error) => {
           console.log(error);
         },
         () => {
           storage
             .ref("images")
             .child(image.name)
             .getDownloadURL()
             .then((url) => {
               setPictureUrl(url);
             });
         }
       );
     };

  return (
    <IonContent class="ion-text-center ion-padding " color="danger">
      <img
        src="\assets\images\logoWhiteName.png"
        className={styles.registrationLogo}
        alt="logo"
      ></img>
      <div className="registration-section ion-padding">
        <div class="heading ion-padding">
          <h1 class={styles.registerText}>Register</h1>
          <p class={styles.registerSub}>Welcome to Sharido</p>
        </div>
        <div class="register-card ion-padding">
          <div class="form-input">
            <icon-icon name="md-eye-off"></icon-icon>
            <ion-item>
              <ion-label position="floating">Username</ion-label>
              <ion-input
                type="text"
                id="username"
                ref={usernameRef}
              ></ion-input>
            </ion-item>
          </div>
          <div class="form-input">
            <icon-icon name="md-mail"></icon-icon>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input type="email" id="email" ref={emailRef}></ion-input>
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
              <ion-input type="password" ref={checkPasswordRef}></ion-input>
            </ion-item>
          </div>
        </div>
        <p className={styles.uploadText}>Upload Profile Picture</p>
        <input
          className={styles.fileUpload}
          type="file"
          onChange={handleChange}
        ></input>
        <div class="action-button ion-padding">
          <ion-button
            size="large"
            class="register-button"
            className={styles.uploadbutton}
            onClick={handleUploadPicture}
            disabled={loading}
          >
            Upload Profile Pic
          </ion-button>
          <ion-button
            disabled={loading}
            size="large"
            class="register-button"
            onClick={handleRegister}
          >
            Register
          </ion-button>
          <p className={styles.alreadyHaveAccount}>Already have an account?</p>
        </div>
      </div>
    </IonContent>
  );
};

export default RegistrationCard;
