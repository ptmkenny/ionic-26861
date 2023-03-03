import { IonAlert, IonButton, IonContent, IonHeader, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <ExploreContainer name="Tab 1 page" />
        <IonButton onClick={() => {
          console.log('you clicked the button');
          setIsOpen(true);
        }}>
          This is a button.
        </IonButton>
        <IonAlert isOpen={isOpen} message="This is an alert." />
        <IonSelect label="Fruit" name="fruit" placeholder='Select a fruit'>
          <IonSelectOption value="apples" key="apples">Apples</IonSelectOption>
          <IonSelectOption value="grapes" key="grapes">Grapes</IonSelectOption>
          <IonSelectOption value="other" key="other">Other</IonSelectOption>
        </IonSelect>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
