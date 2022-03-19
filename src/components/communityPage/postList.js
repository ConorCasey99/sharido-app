import React, { useState, useEffect } from "react";
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
import { useParams } from "react-router";

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
                  post?.postPicture
                }
                alt="ion"
              ></img>
            </Link>
            <ion-card-header>
              <ion-card-title>{post.postTitle}</ion-card-title>
            </ion-card-header>
            <ion-card-content>{post.postDescription}</ion-card-content>
            <Link to={post.postDocument}>
              <ion-card-content>{post.postTitle} Documents</ion-card-content>
            </Link>
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
