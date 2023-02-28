import { IonLoading } from "@ionic/react"

const FallbackLoading: React.FC = () => {
    return <IonLoading isOpen message="Loading for 5 seconds even if data is returned!" duration={5000} />
}

export default FallbackLoading;
