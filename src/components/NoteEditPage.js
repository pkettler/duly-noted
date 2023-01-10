import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonActionSheet,
  IonAlert,
} from '@ionic/react';
import {
  chevronBack,
  ellipsisHorizontal,
  trash,
  archive,
  close,
} from 'ionicons/icons';
import styles from './NoteEditPage.module.css';
import '../App.css';
import { useTranslation } from 'react-i18next';

export default function NoteEditPage(props) {
  const { text, onSave, onDelete, onArchive } = props;

  const [value, setValue] = useState(text);
  const [showActions, setShowActions] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton color="secondary" onClick={() => onSave(value)}>
              <IonIcon slot="icon-only" icon={chevronBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>{t('noteListPageTitle')}</IonTitle>
          <IonButtons slot="primary">
            <IonButton color="secondary" onClick={() => setShowActions(true)}>
              <IonIcon slot="icon-only" icon={ellipsisHorizontal} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <textarea
          className={styles.textArea}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          autoComplete="off"
        />{' '}
        <br />
        <br />
        <IonActionSheet
          isOpen={showActions}
          onDidDismiss={() => setShowActions(false)}
          buttons={[
            {
              text: t('noteEditDelete'),
              role: 'destructive',
              icon: trash,
              handler: () => setShowAlert(true),
            },
            {
              text: t('noteEditArchive'),
              icon: archive,
              handler: () => onArchive(value),
            },
            {
              text: t('noteEditCancel'),
              role: 'cancel',
              icon: close,
              handler: () => setShowActions(false),
            },
          ]}
        />
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={t('alertHeader')}
          message={t('alertMessage')}
          buttons={[
            {
              text: t('noteEditCancel'),
              role: 'cancel',
              handler: () => setShowAlert(false),
            },
            {
              text: t('noteEditDelete'),
              handler: onDelete,
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
}

NoteEditPage.propTypes = {
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
