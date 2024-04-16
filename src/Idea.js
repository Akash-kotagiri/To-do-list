import React from "react";

export function Idea(props){
    const{idea,removeIdea} = props;

    const handleRemoveClick = () => {
        removeIdea(idea.id);
    };

    return (
        <li className="Idea">
            <button className="remove-button" onClick={handleRemoveClick}>
                &times;
            </button>
            <div className="text">{idea.text}</div>
        </li>
    )

}