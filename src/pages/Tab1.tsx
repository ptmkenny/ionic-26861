import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
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
        <p>with ion-item</p>
        <IonItem>
          <IonInput
            type="email"
            autocomplete="email"
            errorText={undefined}
            fill="outline"
            label="INPUT WITH HELPERTEXT"
            labelPlacement="floating"
            helperText='This is some helper text.'></IonInput>
            </IonItem>
        <IonItem>
          <IonInput
            label="INPUT NO HELPERTEXT"
            fill="outline"
            labelPlacement="floating"
          />
        </IonItem>
        <IonItem lines="none">
          <IonButton>Submit</IonButton>
        </IonItem>
        <p>without ion-item</p>
        <IonInput
          type="email"
          autocomplete="email"
          errorText={undefined}
          fill="outline"
          label="INPUT WITH HELPERTEXT"
          labelPlacement="floating"
          helperText='This is some helper text.'></IonInput>
        <IonInput
          label="INPUT NO HELPERTEXT"
          fill="outline"
          labelPlacement="floating"
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
