import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./FloatingActionButton"
import firebase from "../../firebase";
import {add} from 'ionicons/icons'

const FloatingActionButton = () => {
const history = useHistory();
let user = firebase.auth().currentUser;

  function handleOnClick() {
   if (user != null) {
     history.push("CreateCommunity");
   } else {
     accountAlert();
   }}

 async function accountAlert() {
  const alert = document.createElement("ion-alert");
  alert.cssClass = "my-custom-class";
  alert.header = "Alert";
  alert.subHeader = "";
  alert.message = "Please sign in to create a community";
  alert.buttons = ["OK"];

  document.body.appendChild(alert);
  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log("onDidDismiss resolved with role", role);
}

  return (
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon 
        icon={add} 
        onClick={handleOnClick}
        ></ion-icon>
      </ion-fab-button>
    </ion-fab>
  );
};

export default FloatingActionButton;
