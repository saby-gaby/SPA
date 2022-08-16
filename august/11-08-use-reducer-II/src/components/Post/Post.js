import React from 'react'
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent'

export default function Post(props) {
  return (
    <Card
      raised={true}
      sx={{ maxWidth: 800, margin: 2 }}
    >
      <CardContent>
        <p>
          <b>{props.post.user}</b>
        </p>
        <p>{props.post.content}</p>
        <p>{props.post.date}</p>
      </CardContent>
    </Card>
  );
}
