import React,{ useState } from "react";
import { generateId } from "./GenerateId";
import { AddIdeas } from "./Add_Ideas";
import { Idea } from "./Idea";
import './style.css';

export default function App(){
    const [ideas,setIdeas] = useState([
        {
            id: generateId(),
            text:'This is a place for you to pass your todo list'
        },
        {
            id: generateId(),
            text: 'you can delete the list whenever you want to'
        }
    ]);

    const addIdea = (idea) => {
        setIdeas((ideas) => [idea, ...ideas]);

    };

    const removeIdea = (ideaIdToRemove) => {
        setIdeas(ideas => ideas.filter(idea => idea.id !== ideaIdToRemove));
    };

    return (
        <div className="App">
            <h1>To-do-List</h1>
            <main>
                <AddIdeas addIdea={addIdea}/>
                <ul className="ideas">
                    {
                        ideas.map((idea) => (
                            <Idea key={idea.id} idea={idea} removeIdea={removeIdea}/>
                        ))
                    }
                </ul>
            </main>
        </div>
    )
}