import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Suspense } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import SlowQueryExample from './SlowQueryExample';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
        <Suspense fallback={<p>Query is loading!</p>}>
          <SlowQueryExample />
        </Suspense>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
