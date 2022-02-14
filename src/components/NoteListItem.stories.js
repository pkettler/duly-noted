import React from "react";
import { action } from "@storybook/addon-actions";
import NoteListItem from "./NoteListItem";

export default {
    Title: "NoteListItem",
    Component: NoteListItem
};

//short text
export const ShortText = () => {
    return (
    <NoteListItem id="1" createdAt={new Date() } text="this is a short note" />
    );
}


//long text
export const LongText = () => {
    return (
    <NoteListItem id="1" createdAt={new Date() } text="this is a long note this is a long notethis is a long notethis is a long notethis is a long notethis is a long notethis is a long notethis is a long notethis is a long note" />
    );
}

//markdown text
export const MarkdownText = () => {
    return (
    <NoteListItem id="1" createdAt={new Date() } text="Markdown _is_ **possible!**" />
    );
}

        const oneHourAgo = Date.now() - (1* 60 * 60 * 1000);
        const now = Date.now();
        const oneWeek = Date.now() - (100 * 60 * 60 * 1000);
        const oneMonth = Date.now() - (30 * 24 * 60 * 60 * 1000); 

//created less than one week ago
export const LessThanOneWeek = () => {
    return (
    <NoteListItem id="1" createdAt={ oneWeek } text="this is a short note" />
    );
}

//created more than one week ago

export const MoreThanOneWeek = () => {
    return (
    <NoteListItem id="1" createdAt={oneMonth } text="this is a short note" />
    );
}

//click action
export const ClickAction = () => {
    return (
    <NoteListItem id="1" createdAt={new Date() } text="this is a short note" 
    onClick = {action("onClick")}
    />
    );
}

//empty state
export const EmptyText = () => {
    return (
    <NoteListItem id="1" createdAt={new Date() } text="" />
    );
}

export const SpacesOnly = () => {
    return (
    <NoteListItem id="1" createdAt={new Date() } text="     " />
    );
}

//error state
export const ErrorState = () => {
    const onClick = () => {
        throw new Error ("simulated error")
    }
    return (
        <NoteListItem
        id= "1"
        text="this is a short note"
        createdAt={ new Date() }
        onClick={onClick}
        />
    );
}