L'affichage d'un bouton basique sur ReactJS :

```js
<Bouton value="Test" />
```

Pour ajouter une action sur ce bouton :

```js
<Bouton value="Test 1" onClick={()=> alert('clic')} />
```
Pour ajouter du style sur ce bouton :  
* backgroundColor
```js
<Bouton value="Test 2" backgroundColor='pink'/>
```
* borderRadius
```js
<Bouton value="Test 3" borderRadius='20px'/>
```
* width
```js
<Bouton value="Test 4" width='90px'/>
```
* height
```js
<Bouton value="Test 5" height='30px'/>
```
* bordercolor
```js
<Bouton value="Test 6" borderColor='black'/>
```
* color
```js
<Bouton value="Test 7" color='red'/>
```
Voici un bouton complet :
```js
<Bouton value="Test 8" onClick={()=> alert('clic')} backgroundColor='black' borderRadius='20px' width='90px' height='30px' borderColor= 'black' color='white'/>
```
