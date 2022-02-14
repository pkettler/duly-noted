import React from "react";
import { action } from "@storybook/addon-actions";
import NoteEditPage from "./NoteEditPage";


export default {
    Title: "NoteEditPage",
    Component: NoteEditPage
};

export const NoteExist = () => {
    return (
    <NoteEditPage id="1"  text="this is a short note" />
    );
}

export const NoteNoContent = () => {
    return (
    <NoteEditPage  />
    );
}

//Save Button
export const saveClicked = () => {
    
    return (
    <NoteEditPage id="1" onSave={action("onClick")} text="this is a short note"  />
    );
}

//Cancel Button
export const cancelClicked = () => {
    
    return (
    <NoteEditPage id="1" onCancel={action("onClick")} text="this is a short note" />
    );
}

//Delete Button
export const deleteClicked = () => {
    
    return (
    <NoteEditPage id="1" onDelete={action("onClick")} text="this is a short note" />
    );
}



