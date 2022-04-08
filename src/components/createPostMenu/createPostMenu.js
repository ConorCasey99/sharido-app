import React, { useState, useRef } from "react";

import {
  IonPage,
  IonContent,
} from "@ionic/react";

import { useParams } from "react-router";
import { db } from "../../firebase";
import { collection, addDoc} from "firebase/firestore";
import { useAuthentication } from "../../contexts/authentication/AuthenticationContext";
import styles from "./createPostMenu.module.scss";
import { storage } from "../../firebase";

const CreatePostMenu = () => {
  const [loading, setLoading] = useState(false);
  const postTitleRef = useRef();
  const postDescriptionRef = useRef();
  const { currentUser } = useAuthentication();
  const postsCollectionRef = collection(db, "posts");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
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
        <div className={styles.createPostSection}>
          <div class={styles.createPostHeader}>
            <h1>Create a Post!</h1>
          </div>
          <div class="register-card ion-padding">
            <img
              className={styles.postImage}
              src={pictureUrl}
              alt={pictureUrl}
            ></img>
            <div class="form-input">
              <icon-icon name="md-mail"></icon-icon>
              <ion-item>
                <ion-label position="floating">Post Title</ion-label>
                <ion-input
                  id="title"
                  ref={postTitleRef}
                  type="text"
                  className={styles.createPostInput}
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
                  className={styles.createPostInput}
                ></ion-input>
              </ion-item>
            </div>
          </div>
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
              Upload Picture
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
