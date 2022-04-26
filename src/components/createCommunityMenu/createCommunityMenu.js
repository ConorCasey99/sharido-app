import React, { useState, useRef } from "react";

import { useHistory } from "react-router";
import {db} from '../../firebase'
import {collection, addDoc} from 'firebase/firestore'
import { useAuthentication } from "../../contexts/authentication/AuthenticationContext";
import styles from "./createCommunityMenu.module.scss";
import { storage } from "../../firebase";

const CreateCommunityMenu = ({community}) => {
  const [loading, setLoading] = useState(false);
  const communityTitleRef = useRef();
  const communityDescriptionRef = useRef();
  const communityCategoryRef = useRef();
  const { currentUser } = useAuthentication();
  const communitiesCollectionRef = collection(db, "communities");
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  async function handleCreate() {
    presentLoading();
    await addDoc(communitiesCollectionRef, {
      communityName: communityTitleRef.current.value,
      communityDescription: communityDescriptionRef.current.value,
      communityCategory: communityCategoryRef.current.value,
      communityMembers: [currentUser.email],
      admin: currentUser.email,
      communityPicture: url,
      posts: [],
    });
    //uploadImageAsync();
    //handleUpload();
    community = communitiesCollectionRef;
    presentLoading();
  }

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  //https://www.youtube.com/watch?v=8r1Pb6Ja90o
  const handleUpload = () => {
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
            setUrl(url);
          });
      }
    );
    presentLoadingImageUpload();
  };

  function loadUsers() {}

  console.log("image: ", image);

  async function presentLoading() {
    const loading = document.createElement("ion-loading");

    loading.cssClass = "my-custom-class";
    loading.message = "Creating Community!";
    loading.duration = 2000;
    document.body.appendChild(loading);
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed!");
    history.push("/page/Communities");
  }

  async function presentLoadingImageUpload() {
    const loading = document.createElement("ion-loading");

    loading.cssClass = "my-custom-class";
    loading.message = "Uploading Image!";
    loading.duration = 2000;
    document.body.appendChild(loading);
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed!");
  }

  /*
const triggerCamera = useCallback(async () => {
  getPhoto({
    quality: 100,
    allowEditing: false,
    resultType: CameraResultType.Base64,
  });
}, [getPhoto]);


   async function uploadImageAsync() {
      console.log(communityPic);
      storage
        .ref(`/images/${communityTitleRef.current.value}`)
        .put(communityPic);
     
  }
*/

  return (
    <div className={styles.createCommunitySection}>
      <div>
        <h1 classname={styles.createCommunityHeader}>Create a Community!</h1>
        <img className={styles.communityImage} src={url} alt={url}></img>
        <div className={styles.createCommunityInput} class="form-input">
          <icon-icon name="md-mail"></icon-icon>
          <ion-item>
            <ion-label position="floating">Community Name</ion-label>
            <ion-input
              id="communityTitle"
              ref={communityTitleRef}
              type="text"
              className={styles.createCommunityInput}
            ></ion-input>
          </ion-item>
        </div>
        <div className={styles.createCommunityInput} class="form-input">
          <icon-icon name="md-eye-off"></icon-icon>
          <ion-item>
            <ion-label position="floating">Community Description</ion-label>
            <ion-input
              id="communityDescription"
              ref={communityDescriptionRef}
              type="description"
            ></ion-input>
          </ion-item>
        </div>
      </div>
      <ion-item>
        <ion-label>Community Category</ion-label>
        <ion-select
          ref={communityCategoryRef}
          interface="action-sheet"
          class="custom-options"
          className={styles.createCommunityInput}
        >
          <ion-select-option value="Agriculture">Agriculture</ion-select-option>
          <ion-select-option value="Animals">Animals</ion-select-option>
          <ion-select-option value="ArtsandCrafts">
            Arts and Crafts
          </ion-select-option>
          <ion-select-option value="Automotive">Automotive</ion-select-option>
          <ion-select-option value="Carpentry">Carpentry</ion-select-option>
          <ion-select-option value="Cooking">Cooking</ion-select-option>
          <ion-select-option value="Computing">Computing</ion-select-option>
          <ion-select-option value="TvandFilm">Film and Tv</ion-select-option>
          <ion-select-option value="Fashion">Fashion</ion-select-option>
          <ion-select-option value="Finance">Finance</ion-select-option>
          <ion-select-option value="Gaming">Gaming</ion-select-option>
          <ion-select-option value="HealthandFitness">
            Health and Fitness
          </ion-select-option>
          <ion-select-option value="Outdoors">Outdoors</ion-select-option>
          <ion-select-option value="Literature">Literature</ion-select-option>
          <ion-select-option value="MetalWorking">
            Metal Working
          </ion-select-option>
          <ion-select-option value="MobileTechnology">
            Mobile Technology
          </ion-select-option>
          <ion-select-option value="Music">Music</ion-select-option>
          <ion-select-option value="Travel">Travel</ion-select-option>

          <ion-select-option value="Sports">Sports</ion-select-option>
        </ion-select>
      </ion-item>
      <div className={styles.uploadAreaText}>
        Upload Community Picture<br></br>
        <input
          className={styles.uploadArea}
          type="file"
          onChange={handleChange}
        ></input>
        <br></br>
        <ion-button
          size="large"
          onClick={handleUpload}
          disabled={loading}
          className={styles.uploadButton}
        >
          Upload Photo
        </ion-button>
        <ion-button
          size="large"
          onClick={handleCreate}
          disabled={loading}
          className={styles.createButton}
        >
          Create Community
        </ion-button>
      </div>
    </div>
  );
};

export default CreateCommunityMenu;
