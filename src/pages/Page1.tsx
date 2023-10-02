import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Page1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot='start'>
                <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Page 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Page 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className='ion-padding'>
            <IonButton routerLink='/app/page1/details' expand='full'>Go deeper!</IonButton>
            <IonButton routerLink='/detailsoutside' expand='full'>Go detailsoutside!</IonButton>
        </div>
        
        <ExploreContainer />

    
      </IonContent>
    </IonPage>
  );
};

export default Page1;
