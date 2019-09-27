L'affichage d'un autocomplete basique sur ReactJS :

```js
data = [
    {
        name: 'France'
    },
    {
        name: 'Angleterre'
    },
    {
        name: 'Espagne'
    }
];

<Autocomplete  data={data}/>
```

Ajouter un placeholder :
```js
data = [
    {
        name: 'France'
    },
    {
        name: 'Angleterre'
    },
    {
        name: 'Espagne'
    }
];

<Autocomplete  data={data} placeholder='Saisir un pays'/>
```