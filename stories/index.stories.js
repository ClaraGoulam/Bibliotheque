import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Bouton from '../src/Components/Bouton'

storiesOf('Bouton',module)
    .add('L\'affichage d\'un bouton basique sur ReactJS',()=> <Bouton value='Test'></Bouton>)
    .add('Pour ajouter une action sur ce bouton',()=><Bouton value="Test 1" onClick={()=> alert('clic')} />)
    .add('Pour ajouter un backgroundColor sur ce bouton',()=><Bouton value="Test 2" backgroundColor='pink'/>)
    .add('Pour ajouter un borderRadius à ce bouton', ()=><Bouton value="Test 3" borderRadius='20px'/>)
    .add('Pour ajouter une width à ce bouton',()=><Bouton value="Test 4" width='90px'/>)
    .add('Pour ajouter une height à ce bouton', ()=><Bouton value="Test 5" height='30px'/>)
    .add('Pour ajouter un borderColor à ce bouton',()=><Bouton value="Test 6" borderColor='black'/>)
    .add('Pour ajouter une color à ce bouton',()=><Bouton value="Test 7" color='red'/>)
    .add('Voici un bouton complet',()=><Bouton value="Test 8" onClick={()=> alert('clic')} backgroundColor='black' borderRadius='20px' width='90px' height='30px' borderColor= 'black' color='white'/>)