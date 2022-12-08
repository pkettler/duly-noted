import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import NoteEditPageController from "./components/NoteEditPageController.js";

import { ApolloProvider,  } from '@apollo/client';
// import  apolloClient  from './apolloClient';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import NoteListPage from './components/NoteListPage';
import './App.css';

setupIonicReact();

function App(props: any) {
  return (
  <ApolloProvider client={props.apolloClient}>
   
        <IonApp>
          <IonReactRouter>
          <IonRouterOutlet>
          <Route exact path="/notes/edit/:id" component={NoteEditPageController} />
          <Route exact path="/notes" component={NoteListPage} />
          <Redirect exact from='/' to="/notes" />
          </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
     
  </ApolloProvider>
  );
 }
export default App;
