import React from 'react';
import Phaser from 'phaser';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MainScene from '../scenes/MainScene';
import './Tab1.css';

const game = new Phaser.Game({
    parent: 'game-root',
    type: Phaser.AUTO,
    width: 300,
    height: 500,
    scene: [MainScene],
});

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
            <div id="game-root"></div>
        </IonPage>
    );
};

export default Tab1;
