import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Suspense } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import QueryExample from './QueryExample';
import FallbackLoading from '../components/FallbackLoading';

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
        <Suspense fallback={<FallbackLoading />}>
          <QueryExample />
        </Suspense>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
