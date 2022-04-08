import React, { useState, useEffect } from "react";

import {
  query,
  collection,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../../firebase";
import { useParams } from "react-router";
import {IonItem} from "@ionic/react";
import { folder, create, trash } from "ionicons/icons";
import styles from "./postPageComponent.module.scss"
import { useAuthentication } from "../../contexts/authentication/AuthenticationContext";
import "firebase/firestore";

const PostPageComponent = () => {
  const { id } = useParams();
  const { currentUser } = useAuthentication();
  const [post, setPost] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  
   useEffect(() => {
     const queryPosts = async () => {
       const postsQuery = query(
         postsCollectionRef,
         where("communityId", "==", id)
       );
       const postsQuerySnap = await doc(postsQuery);
       setPost(
         postsQuerySnap.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
       );
     };
     queryPosts();
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

  // Get Data
  function getPost() {
   db.collection("posts")
     .doc('Mto9tqWfVGqAYeAsLwli')
     .get()
     .then((snapshot) => setPost(snapshot.data()));
  }

  console.log(post)
  const deletePost = async (id, poster) => {
    if (poster !== currentUser.email) {
      deleteAlert();
    } else {
      const postDoc = doc(db, "posts", id);
      await deleteDoc(postDoc);
    }
  };

  async function deleteAlert() {
    const alert = document.createElement("ion-alert");
    alert.cssClass = "my-custom-class";
    alert.header = "Alert";
    alert.subHeader = "You need to be the poster to delete this";
    alert.buttons = ["OK"];

    document.body.appendChild(alert);
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  return (
    <div id="communityCards" className="communitiesPage">
      {post.map((post) => {
        return (
          <ion-card class="postcard" key={post.id}>
            <img
              className={styles.postPic}
              key={post.id}
              src={post?.postPicture}
              alt="ion"
            ></img>
            <ion-card-header>
              <ion-card-title>{post.postTitle}</ion-card-title>
            </ion-card-header>
            <IonItem>{post.postDescription}</IonItem>
            <ion-footer>
              <ion-row>
                <img
                  className={styles.folderIcon}
                  src={folder}
                  alt={folder}
                ></img>
                <IonItem href={post.postDocument}>
                  Open {post.postTitle} Document
                </IonItem>
                <img
                  className={styles.folderIcon}
                  src={create}
                  alt={"edit"}
                ></img>
                <button>
                  <img
                    onClick={() => {
                      deletePost(post.id, post.poster);
                    }}
                    className={styles.folderIcon}
                    src={trash}
                    alt={"Delete"}
                  ></img>
                </button>
              </ion-row>
            </ion-footer>
          </ion-card>
        );
      })}
    </div>
  );
};

export default PostPageComponent;
