import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  getDocs,
  query,
  collection,
  where,
} from "firebase/firestore";
import { db } from "../../firebase"
import { useParams } from "react-router";
import styles from './postList.module.scss'

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
           <ion-grid>
            <ion-row>
              <ion-col class="ion-align-self-center" size-md="6" push-md="3">
          <ion-card class="postcard" key={post.id}>
            <Link to={`/page/Post/${post.id}`}>
              <img key={post.id} src={post?.postPicture} alt="ion" className={styles.postPic}></img>
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
                      deletePost(post.id, post.admin);
                    }}
                  >
                    {" "}
                    Delete Post
                  </button>
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

export default PostList;
