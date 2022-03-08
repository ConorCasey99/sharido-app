import React, {useCallback , useState, useRef } from "react";

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
import {db} from '../../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { useAuthentication } from "../../contexts/authentication/AuthenticationContext";


import {
  useCamera,
  availableFeatures,
} from "@capacitor-community/camera-react";
import { storage, uuid } from "../../firebase";
import firebase from "../../firebase";

const CreateCommunityMenu = ({community}) => {
  const [loading, setLoading] = useState(false);
  const communityTitleRef = useRef();
  const communityDescriptionRef = useRef();
  const communityCategoryRef = useRef();
  const { currentUser } = useAuthentication();
  const communitiesCollectionRef = collection(db, "communities");
  const history = useHistory()
  //const { photo, getPhoto } = useCamera();
  const [image, setImage] = useState(null);
  const [communityPic, setCommunityPic] = useState("")
  const [url, setUrl] = useState("");

  async function handleCreate(){
     presentLoading()
     await addDoc(communitiesCollectionRef, {
        communityName: communityTitleRef.current.value, 
        communityDescription: communityDescriptionRef.current.value, 
        communityCategory: communityCategoryRef.current.value,
        communityMembers: [
          currentUser.email
        ], 
        admin: currentUser.email,
        communityPicture: url ,
        posts: [

        ]
      });
     //uploadImageAsync();
     //handleUpload();
     community = communitiesCollectionRef
     history.push("/page/Communities");
  }

  const handleChange = e => {
    if (e.target.files[0]){
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    //image.name(communityTitleRef)
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state change",
      snapshot => {},
      error =>{
        console.log(error)
      },
      () => {
        storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          setUrl(url);
        })
      }
    )
  };
  

  function loadUsers(){
    
  }

  console.log("image: ", image)

  async function presentLoading() {
    const loading = document.createElement("ion-loading");

    loading.cssClass = "my-custom-class";
    loading.message = "Creating Community!";
    loading.duration = 1400;
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
    <IonPage>
      <IonContent>
        <div className="registration-section ion-padding">
          <div class="heading ion-padding">
            <h1>Create a Community!</h1>
          </div>
          <div class="register-card ion-padding">
            <IonAvatar src={url}></IonAvatar>
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
          <ion-item>
            <ion-label>Community Category</ion-label>
            <ion-select
              ref={communityCategoryRef}
              interface="action-sheet"
              class="custom-options"
            >
              <ion-select-option value="Mobile Techology">
                Mobile Technology
              </ion-select-option>
              <ion-select-option value="Automotive">
                Automotive
              </ion-select-option>
              <ion-select-option value="Health and Fitness">
                Health and Fitness
              </ion-select-option>
              <ion-select-option value="Arts and Crafts">
                Arts and Crafts
              </ion-select-option>
              <ion-select-option value="Tv and Film">
                Film and Tv
              </ion-select-option>
              <ion-select-option value="Cooking">Cooking</ion-select-option>
              <ion-select-option value="Gaming">Gaming</ion-select-option>
              <ion-select-option value="Music">Music</ion-select-option>
            </ion-select>
          </ion-item>
          <div class="action-button ion-padding">
            Upload Community Picture<br></br>
            <input type="file" onChange={handleChange}></input>
            <ion-button
              size="large"
              class="register-button"
              onClick={handleUpload}
              disabled={loading}
            ></ion-button>
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

export default CreateCommunityMenu;
