import { Button, Modal, TextField, TextareaAutosize } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase64 from "react-file-base64";
import { modelState$ } from "../../redux/selectors";
import { hideModel } from "../../redux/actions";
import { createPost } from "../../redux/actions";

const CreatePostModel = () => {
    const [data, setData] = useState({
        title: "",
        content: "",
        attachment: "",
    });

    const dispatch = useDispatch();
    const { isShow } = useSelector(modelState$);

    const onClose = useCallback(() => {
        dispatch(hideModel());
        setData({
            title: "",
            content: "",
            attachment: "",
        });
    }, [dispatch]);

    const onSubmit = useCallback(() => {
        dispatch(createPost.createPostRequest(data));
        onClose();
    }, [data, dispatch, onClose]);

    const body = (
        <div
            className=" bg-gray-200 rounded-md absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-350 shadow-md p-4"
            id="simple-model-title"
        >
            <h2 className=" text-center mb-[10px]">Create new post</h2>
            <form noValidate autoComplete="off" className=" flex flex-col">
                <TextField
                    className="!mb-[10px]"
                    required
                    label="Title"
                    value={data.title}
                    onChange={(e) =>
                        setData({ ...data, title: e.target.value })
                    }
                />
                <TextareaAutosize
                    className="p-[10px] mb-[10px]"
                    minRows={10}
                    maxRows={15}
                    placeholder="Content..."
                    value={data.content}
                    onChange={(e) =>
                        setData({ ...data, content: e.target.value })
                    }
                />
                <FileBase64
                    accept="image/*"
                    multiple={false}
                    type="file"
                    value={data.attachment}
                    onDone={({ base64 }) =>
                        setData({ ...data, attachment: base64 })
                    }
                />
                <div className="mt-[10px]">
                    <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        fullWidth
                        onClick={onSubmit}
                    >
                        Create
                    </Button>
                </div>
            </form>
        </div>
    );
    return (
        <div>
            <Modal open={isShow} onClose={onClose}>
                {body}
            </Modal>
        </div>
    );
};

export default CreatePostModel;
