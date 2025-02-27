# Plant Collection App

## 📌 Prérequis
Avant de commencer, assure-toi d'avoir installé les éléments suivants :
- [Node.js](https://nodejs.org/) (version 16+ recommandée)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🚀 Installation
Clone ce dépôt et installe les dépendances :
```sh
# Cloner le projet
git clone https://github.com/ton-projet.git
cd ton-projet

# Installer les dépendances
npm install
# ou avec yarn
yarn install
```

## ▶️ Lancer le projet
```sh
npm start
# ou avec yarn
yarn start
```

Le projet s'ouvrira automatiquement dans le navigateur à l'adresse :
```
http://localhost:3000
```
Si ce n'est pas le cas, ouvre un navigateur et tape cette URL.

## 🛠 Développement
- **Pour arrêter le serveur** : `CTRL + C` dans le terminal
- **Pour relancer après une modification** : Sauvegarde et actualise le navigateur
- **Si un port est déjà utilisé** : Essaie `npx kill-port 3000`

## 🐛 Dépannage
### Problèmes courants et solutions
#### 📌 "Module not found" ou "Cannot find module"
```sh
npm install
```

#### 📌 "Failed to fetch" ou "Cannot GET /route"
- Vérifie que l'API est bien accessible
- Regarde si l'URL de l'API est correcte

#### 📌 "Site inaccessible"
- Vérifie que le serveur est bien lancé (`npm start`)
- Teste avec `http://127.0.0.1:3000` au lieu de `http://localhost:3000`
- Arrête tous les processus Node.js avec `npx kill-port 3000`

## 📄 Technologies utilisées
- React.js
- React Router
- Redux (gestion du thème global)
- API externe (Trefle.io)

