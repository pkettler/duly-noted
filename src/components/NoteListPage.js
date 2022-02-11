import React, { useState } from "react";
import PropTypes from 'prop-types';
import NoteListItem from "./NoteListItem";
import NoteEditPage from './NoteEditPage';


const initialNotes = [
    {
        id: "1",
        createdAt: new Date(),
        text: "React _is_ **fun**!"    
    },
    {
        id: "2",
        createdAt: new Date(),
        text: "This is note 2"
    },
    {
        id: "3",
        createdAt: new Date(),
        text: "This is note 3"
    },
];

export default function NoteListPage(props) {

const [selectedNoteId, setSelectedNoteId] = useState(null)
const [notes, setNotes] = useState(initialNotes);

//Save Note

const handleOnSave = (newNoteText) => {
    const updatedNotes = notes.map((note) => {
        if(note.id === selectedNoteId) {
            return {
                ...note, 
                text: newNoteText
            };
        }
        return note;
    });
    setNotes(updatedNotes);
    setSelectedNoteId(null);
}

// Cancel Note

const handleOnCancel = () => {
    setSelectedNoteId(null);
}

// Delete Note

const handleOnDelete = () => { 
    setNotes(notes.filter(note => note.id !== selectedNoteId));
    setSelectedNoteId(null);
}

    if(selectedNoteId) {
        const selectedNote = notes.find((note) => note.id ===
        selectedNoteId)
        return (
            <NoteEditPage 
            onSave={handleOnSave} 
            onCancel={handleOnCancel} 
            onDelete={handleOnDelete} 
            text={selectedNote.text} />
        )
    }

    const handleListItemClick = (id) => {
          setSelectedNoteId(id);
    }

//Count how many clicks and show id alert

    // function handleListItemClick(id){
    //     alert(id + " clicked")
    // }
    
    return (
        <div className="page">
            <h1>Note list</h1>
            <div className="noteList">
                <div className="noteListItem">
                    {
                        notes.map((note) => {
                            return (
                                <NoteListItem
                                id= {note.id}
                                key = {note.id}
                                text= {note.text}
                                createdAt={ note.createdAt}
                                onClick={handleListItemClick}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}

    NoteListItem.propTypes = {
        createdAt: PropTypes.instanceOf(Date).isRequired,
        id: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        text: PropTypes.string.isRequired
    };



