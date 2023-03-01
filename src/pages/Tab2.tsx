import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <IonInput label="Input (disabled=true)" disabled />
        <IonInput label="Input (disabled=false)" disabled={false} />
        <IonInput label="Input (disabled not set)" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
