import React from "react";

export const NoteCard = ({title, content}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
};