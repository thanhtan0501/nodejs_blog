import { createAction, createActions } from "redux-actions";

export const getType = (reduxAction) => {
    return reduxAction().type;
};
export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payload) => payload,
    getPostsFailure: (err) => err,
});
export const createPost = createActions({
    createPostRequest: (payload) => payload,
    createPostSuccess: (payload) => payload,
    createPostFailure: (err) => err,
});
export const updatePost = createActions({
    updatePostRequest: (payload) => payload,
    updatePostSuccess: (payload) => payload,
    updatePostFailure: (err) => err,
});
// {
//     type: "getPostsRequest",
//     payload:{
//         name:"Test"
//     }
// }

export const showModel = createAction("SHOW_CREATE_MODEL");
export const hideModel = createAction("HIDE_CREATE_MODEL");
