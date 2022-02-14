import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import formatDate from "../util/formatDate";


export default function NoteListItem(props) {

    const {
        createdAt,
        id,
        onClick = () => {},
        text,
    } = props;

    let truncatedText;
    if (text.length > 200){
        truncatedText = `${text.substr(0, 200)}...`;
    } else {
        truncatedText = text;
    }

    const addDefaultText = (text) => {
        let textToTrim = text.trim(text);
        if ( textToTrim === "" ) {
           return textToTrim = "No Note Text";
        } else if (textToTrim === " ") {
            return textToTrim = "No Note Text";
        } else {
            return textToTrim;
        }
    }

    const [timesClicked, setTimesClicked] = useState(0);

         const handleListItemClick = (event) => {
             event.preventDefault();
             setTimesClicked(timesClicked + 1)
             if(onClick) {
                 onClick(id)
             }
         }
    
    
        const oneHourAgo = Date.now() - (1* 60 * 60 * 1000);
        const now = Date.now();
        const oneWeek = Date.now() - (100 * 60 * 60 * 1000);
        const oneMonth = Date.now() - (30 * 24 * 60 * 60 * 1000); 

    return (
        <div className="noteListItem" onClick={handleListItemClick} >
            <ReactMarkdown children={addDefaultText(truncatedText)} />
            {formatDate(createdAt)} 
            
        {/* <p>
            I've been clicked { timesClicked } times
        </p> */}
        </div>
    )
}

