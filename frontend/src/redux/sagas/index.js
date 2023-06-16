import { call, takeLatest, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostsSaga(action) {
    try {
        const posts = yield call(api.fetchPosts);
        console.log("[posts]", posts);
        yield put(actions.getPosts.getPostsSuccess(posts.data));
    } catch (error) {
        console.log(error);
        yield put(actions.getPosts.getPostsFailure(error));
    }
}

function* createPostSaga(action) {
    try {
        const post = yield call(api.createPost, action.payload);
        console.log("[create-post]", post);

        yield put(actions.createPost.createPostSuccess(post.data));
    } catch (err) {
        console.error(err);
        yield put(actions.createPost.createPostFailure(err));
    }
}

function* updatePostSaga(action) {
    try {
        const updatedPost = yield call(api.updatePost, action.payload);
        console.log("[create-post]", updatedPost);

        yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
    } catch (err) {
        console.error(err);
        yield put(actions.updatePost.updatePostFailure(err));
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

// Generator Function ES6

export default mySaga;
