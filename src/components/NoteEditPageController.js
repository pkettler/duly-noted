import React from 'react';
import NoteEditPage from './NoteEditPage';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { gql, useMutation, useQuery } from '@apollo/client';
import { GET_NOTES } from './NoteListPage';

const GET_ONE_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      isArchived
      text
    }
  }
`;

const UPDATE_NOTE = gql`
  mutation updateNote($id: ID!, $note: UpdateNoteInput!) {
    updateNote(id: $id, note: $note) {
      isArchived
      text
    }
  }
`;

const DELETE_NOTE = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id) {
      isArchived
      text
    }
  }
`;
export default function NoteEditPageController() {
  const [updateNote] = useMutation(UPDATE_NOTE, {
    onCompleted(data) {
      if (data && data.updateNote) {
        history.goBack();
      }
    },
    refetchQueries: [
      {
        query: GET_NOTES,
      },
    ],
  });
  const [deleteNote] = useMutation(DELETE_NOTE, {
    onCompleted(data) {
      if (data && data.deleteNote) {
        history.goBack();
      }
    },
    refetchQueries: [
      {
        query: GET_NOTES,
      },
    ],
  });
  const { id } = useParams();
  const history = useHistory();

  const { data } = useQuery(GET_ONE_NOTE, {
    variables: {
      id,
    },
  });

  const [archiveNote] = useMutation(UPDATE_NOTE, {
    onCompleted(data) {
      if (data && data.archiveNote) {
        history.goBack();
      }
    },
    refetchQueries: [
      {
        query: GET_NOTES,
      },
    ],
  });

  const selectedNote = data && data.note;
  if (!selectedNote) return null;

  //Save Note

  const handleOnSave = (newNoteText) => {
    if (newNoteText.trim() === '') {
      deleteNote({
        variables: {
          id: id,
        },
      });
    } else {
      updateNote({
        variables: {
          id: id,
          note: {
            isArchived: false,
            text: newNoteText,
          },
        },
      });
      history.goBack();
    }
  };

  //Archive Note

  const handleSelectedNoteArchive = (value) => {
    archiveNote({
      variables: {
        id: id,
        note: {
          isArchived: true,
          text: value,
        },
      },
    });
    history.goBack();
  };

  // Delete Note

  const handleOnDelete = () => {
    deleteNote({
      variables: {
        id: id,
      },
    });
    history.goBack();
  };

  return (
    <NoteEditPage
      onSave={handleOnSave}
      onDelete={handleOnDelete}
      onArchive={handleSelectedNoteArchive}
      text={selectedNote.text}
    />
  );
}
