import React from "react";

function Note(props){

    function handleCLick(){
        props.onDelete(props.id);
    }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleCLick}>Delete</button>
        </div>
    );
}

export default Note;