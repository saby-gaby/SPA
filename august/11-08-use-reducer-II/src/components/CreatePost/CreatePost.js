import React, { useState } from "react";
import moment from "moment";
import {
    Card,
    CardContent,
    TextField,
    Button
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function CreatePost(props) {
  const [newPostContent, setNewPostContent] = useState("");

  const createNewPost = () => {
    const newPost = {
      user: props.user.name,
      content: newPostContent,
      date: moment().format("DD-MM-YYYY HH:mm"),
    }
      props.dispatch({ type: "createNewPost", payload: newPost })
      setNewPostContent("")
  };

  return (
      <Card
          raised={true}
          sx={{ maxWidth: 800, margin: 4 }}
      >
      <CardContent>
        <TextField
          id="outlined-multiline-flexible"
          multiline
          maxRows={4}
          fullWidth
          placeholder="Was passiert?"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ marginTop: 1 }}
          onClick={() => createNewPost()}
        >
          Zwitscher
        </Button>
      </CardContent>
    </Card>
  );
}
