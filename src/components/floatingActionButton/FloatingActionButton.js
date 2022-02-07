import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./FloatingActionButton"
import app from "../../firebase"
import {add} from 'ionicons/icons'
import { useAuthentication } from "../../contexts/authentication/AuthenticationContext";
const FloatingActionButton = () => {
const history = useHistory();
const {currentUser} = useAuthentication

  function handleOnClick() {
   // if (app.user.email !== null){
    history.push("CreateCommunity");
 // } else {
  //  accountAlert()
  }

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
