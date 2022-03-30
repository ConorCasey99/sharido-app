import React, { useCallback, useState, useRef } from "react";

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
  IonAvatar,
} from "@ionic/react";

import { useHistory, useParams } from "react-router";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useAuthentication } from "../../contexts/authentication/AuthenticationContext";

import {
  useCamera,
  availableFeatures,
} from "@capacitor-community/camera-react";
import { storage, uuid } from "../../firebase";
import firebase from "../../firebase";

const CreatePostMenu = () => {
  const [loading, setLoading] = useState(false);
  const postTitleRef = useRef();
  const postDescriptionRef = useRef();
  const { currentUser } = useAuthentication();
  const postsCollectionRef = collection(db, "posts");
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [postsPic, setPostPic] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [fileUrl, setFileUrl] = useState("");


  let postIdParam = useParams().id

  async function handleCreate() {
    presentLoading();
    await addDoc(postsCollectionRef, {
      communityId: postIdParam,
      postTitle: postTitleRef.current.value,
      postDescription: postDescriptionRef.current.value,
      poster: currentUser.email,
      postPicture: pictureUrl,
      postDocument: fileUrl,
      comments: [],
      postId: postsCollectionRef.id
    });
    //uploadImageAsync();
    //handleUpload();
    
  }

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleChangeFile = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };


  const handleUploadPicture = () => {
    //image.name(communityTitleRef)
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

  const handleUploadFile = () => {
    //image.name(communityTitleRef)
    const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on(
      "state change",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setFileUrl(url);
          });
      }
    );
  };

  async function presentLoading() {
    const loading = document.createElement("ion-loading");
    loading.cssClass = "my-custom-class";
    loading.message = "Creating Post!";
    loading.duration = 1400;
    document.body.appendChild(loading);
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed!");
  }

  return (
    <IonPage>
      <IonContent>
        <div className="registration-section ion-padding">
          <div class="heading ion-padding">
            <h1>Create a Post!</h1>
          </div>
          <div class="register-card ion-padding">
            <IonAvatar src={pictureUrl}></IonAvatar>
            <div class="form-input">
              <icon-icon name="md-mail"></icon-icon>
              <ion-item>
                <ion-label position="floating">Post Title</ion-label>
                <ion-input
                  id="title"
                  ref={postTitleRef}
                  type="text"
                ></ion-input>
              </ion-item>
            </div>
            <div class="form-input">
              <icon-icon name="md-eye-off"></icon-icon>
              <ion-item>
                <ion-label position="floating">Post Content</ion-label>
                <ion-input
                  ref={postDescriptionRef}
                  type="description"
                ></ion-input>
              </ion-item>
            </div>
          </div>
          <ion-item></ion-item>
          <div class="action-button ion-padding">
            Upload Post Picture<br></br>
            <input type="file" onChange={handleChange}></input>
            <br></br>
            Upload Documents<br></br>
            <input type="file" onChange={handleChangeFile}></input>
            <ion-button
              size="large"
              class="register-button"
              onClick={handleUploadFile}
              disabled={loading}
            >
              Upload Files
            </ion-button>
            <ion-button
              size="large"
              class="register-button"
              onClick={handleUploadPicture}
              disabled={loading}
            >
              Upload Pciture
            </ion-button>
            <ion-button
              size="large"
              class="register-button"
              onClick={handleCreate}
              disabled={loading}
            >
              Create Post
            </ion-button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CreatePostMenu;
