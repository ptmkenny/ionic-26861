import { IonAlert, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

// @ts-ignore
const delay = ms => new Promise(res => setTimeout(res, ms));

const Tab1: React.FC = () => {
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={async () => {
          await delay(5000);
          setShowErrorAlert(true);
        }}>Show alert</IonButton>
        <ExploreContainer name="Tab 1 page" />
        <IonAlert
        isOpen={showErrorAlert}
        onDidDismiss={() =>setShowErrorAlert(false)}
        message='This is an alert'
        buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
