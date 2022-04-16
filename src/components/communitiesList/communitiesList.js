import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuthentication } from "../../contexts/authentication/AuthenticationContext";
import styles from "./communitiesList.module.scss"
export var Community_Name;

const CommunitiesList = () => {
  const [communityList, setCommunitiesList] = useState([]);
  const communitiesCollectionRef = collection(db, "communities");
  const { currentUser } = useAuthentication();

  useEffect(() => {
    const getCommunities = async () => {
      const communities = await getDocs(communitiesCollectionRef);
      setCommunitiesList(
        communities.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getCommunities();
  }, []);

  const deleteCommunity = async (id, admin) => {
    if (admin !== currentUser.email) {
      deleteAlert();
    } else {
      const communityDoc = doc(db, "communities", id);
      await deleteDoc(communityDoc);
    }
  };

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
          <ion-grid>
            <ion-row>
              <ion-col class="ion-align-self-center" size-md="6" push-md="3">
                <ion-card classname={styles.communityCard} key={community.id}>
                  <Link to={`/page/CommunityPage/${community.id}`}>
                    <img
                      key={community.id}
                      src={community?.communityPicture}
                      className={styles.communityIcon}
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
                        <button
                          onClick={() => {
                            <Link
                              to={`/page/CommunityPage/${community.id}`}
                            ></Link>;
                          }}
                        >
                          {" "}
                          Follow Community
                        </button>
                      </ion-col>
                      <ion-col center text-center></ion-col>
                    </ion-row>
                  </ion-footer>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        );
      })}
    </div>
    
  );
};

export default CommunitiesList;
