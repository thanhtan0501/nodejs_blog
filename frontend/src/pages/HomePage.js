import React, { useCallback } from "react";
import { Container, Fab } from "@mui/material";
import Header from "../components/Header";
import PostList from "../components/PostList";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { showModel } from "../redux/actions";
import CreatePostModel from "../components/CreatePostModel";

const HomePage = () => {
    const dispatch = useDispatch();
    const openCreatePostModel = useCallback(() => {
        dispatch(showModel());
    }, [dispatch]);
    return (
        <Container max="lg">
            <Header />
            <PostList />
            <CreatePostModel />
            <Fab
                color="primary"
                className="!fixed right-4 bottom-4"
                onClick={openCreatePostModel}
            >
                <AddIcon />
            </Fab>
        </Container>
    );
};

export default HomePage;
