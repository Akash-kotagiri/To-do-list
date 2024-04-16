import React,{ useState } from "react";
import { generateId } from "./GenerateId";

export function AddIdeas(props){
    const[text,setText] = useState('');

    const handleTextChange = ({target}) =>{
        const {value} = target;
        setText(value);
    };

    const handleSubmit = (event) =>{
        if(text.length > 0){
            event.preventDefault();
            const idea = {
                id: generateId(),
                text: text,
            };
            props.addIdea(idea);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="AddIdeas">
            <input type="text" placeholder="What's on your mind?"
                   onChange={handleTextChange} value={text}/>
            <input type="submit" value="add"/>

        </form>
    );
};