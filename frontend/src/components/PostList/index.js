import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { postsState$ } from "../../redux/selectors";

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);

    console.log(posts);
    useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest());
    }, [dispatch]);

    return (
        <Grid container spacing={2} alignItems="stretch">
            {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6}>
                    <Post post={post} />
                </Grid>
            ))}
        </Grid>
    );
};

export default PostList;
