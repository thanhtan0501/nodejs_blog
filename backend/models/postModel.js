import mongoose from "mongoose";

const schema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        content: {
            type: String,
            require: true,
        },
        author: {
            type: String,
            require: true,
            default: "undefined",
        },
        attachment: String,
        likeCount: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

export const postModel = mongoose.model("Post", schema);
