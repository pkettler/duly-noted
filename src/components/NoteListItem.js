import React from 'react';
import ReactMarkdown from 'react-markdown';
import { IonItem } from '@ionic/react';
import formatDate from '../util/formatDate';
import formatNoteItemText from '../util/formatNoteItemText';
import PropTypes from 'prop-types';

export default function NoteListItem(props) {
  const { createdAt, id, onClick = () => {}, text } = props;

  return (
    <IonItem onClick={() => onClick(id)}>
      <ReactMarkdown children={formatNoteItemText(text)} />
      <p>{formatDate(createdAt)}</p>
    </IonItem>
  );
}

NoteListItem.propTypes = {
  createdAt: PropTypes.instanceOf(Date),
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
};
