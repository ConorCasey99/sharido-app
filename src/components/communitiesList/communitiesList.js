import React,  {useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonAvatar,
  IonPage,
  IonRouterLink
} from "@ionic/react";

import firebase from "../../firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../../firebase";
import "./communitiesList.css"
import { updateCurrentUser } from "firebase/auth";
import { useAuthentication } from "../../contexts/authentication/AuthenticationContext";
import { link } from "fs";
import { useParams, useHistory } from "react-router";
export var Community_Name;

const CommunitiesList = () => {
  const [communityList, setCommunitiesList] = useState([]);
  const communitiesCollectionRef = collection(db, "communities");
  const { currentUser } = useAuthentication();
  
  useEffect(() => {
    const getCommunities = async () => {
      const communities = await getDocs(communitiesCollectionRef);
      setCommunitiesList(communities.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getCommunities();
  });

  const deleteCommunity = async (id, admin) => {
    if (admin !== currentUser.email){
      deleteAlert()
    } else{
    const communityDoc = doc(db, "communities", id);
    await deleteDoc(communityDoc)
  }}

  const updateCommunity = async () => {

  }

  async function deleteAlert() {
    const alert = document.createElement("ion-alert");
    alert.cssClass = "my-custom-class";
    alert.header = "Alert";
    alert.subHeader = "You need to be an admin to delete this";
    alert.buttons = ["OK"];

    document.body.appendChild(alert);
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

 

  return (
        <div id="communityCards" className="communitiesPage">
          {communityList.map((community) => {
            return (
              <ion-card key={community.id}>
                <Link to={`/page/CommunityPage/${community.id}`}>
                  <img
                    key={community.id}
                    src={community?.communityPicture}
                    alt="ion"
                  ></img>
                </Link>
                <ion-card-header>
                  <ion-card-title>{community.communityName}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  {community.communityCategory}
                </ion-card-content>
                <ion-card-content>
                  {community.communityDescription}
                </ion-card-content>
                <ion-footer>
                  <ion-row>
                    <ion-col center text-center>
                      <button>
                        <ion-icon name="thumbs-up"></ion-icon>
                        <div>
                          Community Members:{" "}
                          {community?.communityMembers?.length}
                        </div>
                      </button>
                      <button
                        onClick={() => {
                          deleteCommunity(community.id, community.admin);
                        }}
                      >
                        {" "}
                        Delete Community
                      </button>
                      <button
                        onClick={() => {
                          <Link
                            to={`/page/CommunityPage/${community.id}`}
                          ></Link>;
                        }}
                      >
                        {" "}
                        Update Community
                      </button>
                    </ion-col>
                    <ion-col center text-center></ion-col>
                  </ion-row>
                </ion-footer>
              </ion-card>
            );
          })}
        </div>
  );
  
};

export default CommunitiesList;
