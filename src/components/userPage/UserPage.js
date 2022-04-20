import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./UsersPage.module.scss";

import {
  getDocs,
  query,
  collection,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router";
import { IonPage } from "@ionic/react";

const UserPage = () => {
  //const [postList, setUsersList] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const postsCollectionRef = collection(db, "posts");
  let userParam = useParams().userName;
  const [userProfile , setUserProfile] = useState([])
  const [postsList, setPostsList] = useState([])

  useEffect(() => {
    const queryUsers = async () => {
      const usersQuery = query(
        usersCollectionRef,
        where("userName", "==", userParam)
      );
      const usersQuerySnap = await getDocs(usersQuery);
      setUserProfile(
        usersQuerySnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    queryUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const queryPosts = async () => {
      const postsQuery = query(
        postsCollectionRef,
        where("posterName", "==", userParam)
      );

      const postsQuerySnap = await getDocs(postsQuery);

      setPostsList(
        postsQuerySnap.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    queryPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(postsList)

  return (
      <div id="communityCards" className="communitiesPage">
        {userProfile.map((Profile) => {
          return (
            <ion-grid>
              <ion-row>
                <ion-col class="ion-align-self-center" size-md="8" push-md="2">
                  <ion-card className={styles.userCard} key={Profile.id}>
                    <img
                      className={styles.userPicture}
                      key={Profile.id}
                      src={Profile?.userPicture}
                      alt="ion"
                    ></img>
                    <div className={styles.userName}>
                      <ion-card-header className={styles.userName}>
                        <ion-card-title className={styles.userName}>
                          {Profile.userName}
                        </ion-card-title>
                      </ion-card-header>
                    </div>
                  </ion-card>
                </ion-col>
              </ion-row>
            </ion-grid>
          );
        })}
        {postsList.map((post) => {
          return (
            <ion-grid>
              <ion-row>
                <ion-col class="ion-align-self-center" size-md="6" push-md="3">
                  <ion-card class="postcard" key={post.id}>
                    <Link to={`/page/Post/${post.id}`}>
                      <img
                        key={post.id}
                        src={post?.postPicture}
                        alt="ion"
                        className={styles.postPic}
                      ></img>
                    </Link>

                    <ion-card-header>
                      <ion-card-title>{post.postTitle}</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>{post.postDescription}</ion-card-content>
                    <ion-card-content>
                      <a href={post.postDocument} download>
                        {post.postTitle} Document
                      </a>
                    </ion-card-content>

                    <ion-footer>
                      <ion-row>
                        <ion-col center text-center>
                          <button
                            onClick={() => {
                              <Link to={`/page/Post/${post.id}`}></Link>;
                            }}
                          >
                            {" "}
                            Update Post
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

export default UserPage;
