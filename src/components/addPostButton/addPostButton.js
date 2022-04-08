import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { add } from "ionicons/icons";
import { useParams } from "react-router";
import firebase from "../../firebase";

const AddPostButton = () => {
  const history = useHistory();
  let user = firebase.auth().currentUser;
  let idParam = useParams().id;

  function handleOnClick() {
    if (user != null) {
      history.replace(`CreatePostPage/${idParam}`);
      window.location.reload(false);
    } else {
      accountAlert();
    }
  }

  async function accountAlert() {
    const alert = document.createElement("ion-alert");
    alert.cssClass = "my-custom-class";
    alert.header = "Alert";
    alert.subHeader = "";
    alert.message = "Please sign in to create a post";
    alert.buttons = ["OK"];

    document.body.appendChild(alert);
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  return (
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon icon={add} onClick={handleOnClick}></ion-icon>
        </ion-fab-button>
    </ion-fab>
  );
};

export default AddPostButton;
