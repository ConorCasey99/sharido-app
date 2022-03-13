import { IonPage, IonHeader } from "@ionic/react";
import React, { useState, useEffect } from "react";
import firestore from "../../firebase";
import { Link } from "react-router-dom";

import {
  getDocs,
  deleteDoc,
  doc,
  query,
  collection,
  where,
} from "firebase/firestore";
import { db } from "../../firebase"
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { useCollection } from "react-query-firestore";
import { useParams } from "react-router";
import { refresh } from "ionicons/icons";

const PostList = () => {
  const [postList, setPostsList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  let communityId = useParams().id;

  useEffect(() => {
    const queryPosts = async () => {
      const postsQuery = query(
        postsCollectionRef,
        where("communityId", "==", communityId)
      );

      const postsQuerySnap = await getDocs(postsQuery);

      setPostsList(
        postsQuerySnap.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    queryPosts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deletePost = () => {};

  return (
    <div id="communityCards" className="communitiesPage">
      {postList.map((post) => {
        return (
          <ion-card key={post.id}>
            <Link to={`/page/CommunityPage/${post.id}`}>
              <img
                key={post.id}
                src={
                  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst.automobilemag.com%2Fuploads%2Fsites%2F11%2F2016%2F03%2F2015-Mitsubishi-Lancer-Evolution-Final-Edition-engine-1.jpg&f=1&nofb=1"
                }
                alt="ion"
              ></img>
            </Link>
            <ion-card-header>
              <ion-card-title>{post.postTitle}</ion-card-title>
            </ion-card-header>
            <ion-card-content>parts</ion-card-content>
            <ion-card-content>{post.postDescription}</ion-card-content>
            <ion-footer>
              <ion-row>
                <ion-col center text-center>
                  <button>
                    <ion-icon name="thumbs-up"></ion-icon>
                    <div>
                      Community Members: {post?.communityMembers?.length}
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      deletePost(post.id, post.admin);
                    }}
                  >
                    {" "}
                    Delete Community
                  </button>
                  <button
                    onClick={() => {
                      <Link to={`/page/CommunityPage/${post.id}`}></Link>;
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

export default PostList;
