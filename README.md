🌿 Natura Sanat

🔗 **[Voir le site en ligne](https://denis12306.github.io/Natura-Sanat/)**

🌱 Présentation
Natura Sanat est une application web développée dans le cadre du Portfolio Holberton School (Trimestre 3).

Elle vise à :
démocratiser les connaissances en naturothérapie ;
proposer des cours interactifs avec quiz ;
publier des articles santé ;
référencer des professionnels du bien-être.


🎯 Objectifs du projet
Créer une plateforme éducative accessible au grand public
Permettre aux professionnels de partager leurs connaissances
Centraliser des contenus fiables autour de la santé naturelle
Offrir un annuaire de praticiens naturothérapeutes


⚙️ Fonctionnalités

👤 Utilisateur
consulter des cours
lire des articles santé
rechercher des professionnels
contacter un praticien
suivre sa progression (optionnel)

🧑‍⚕️ Professionnel
créer des cours
ajouter des quiz
publier des articles
gérer son profil public

🛠️ Administrateur
gérer utilisateurs
modérer contenus
valider professionnels
administrer la plateforme

👥 User Roles
Role	Permissions
User	lecture contenus, recherche
Professional	création contenu
Admin	gestion complète système


🏗️ Architecture
Architecture générale

Frontend (React)
      ↓
REST API (Node.js / Express)
      ↓
MongoDB (Database)
      ↓
Cloudinary (Images)
      ↓
JWT (Authentication)
Flow principal
Frontend envoie des requêtes API
Backend traite la logique métier
MongoDB stocke les données
JWT sécurise les accès
Cloudinary gère les médias


🧰 Stack technique
Frontend
React.js
TailwindCSS
Axios
React Router
Backend
Node.js
Express.js
MongoDB + Mongoose
Authentification
JWT
bcrypt
Stockage média
Cloudinary
Outils dev
Git / GitHub
Postman
Jest
Cypress

📡 API

Base URL :

/api

🔐 Auth
POST /auth/register
POST /auth/login
GET /auth/me

📚 Courses
GET /courses
GET /courses/:id
POST /courses
PUT /courses/:id
DELETE /courses/:id

📰 Articles
GET /articles
POST /articles
GET /articles/:id

🧑‍⚕️ Professionals
GET /professionals
GET /professionals/:id
POST /professionals

💬 Comments
POST /comments
GET /comments?articleId=

🚀 Installation

1. Cloner le projet
git clone https://github.com/your-username/natura-sanat.git
cd natura-sanat

2. Backend
cd server
npm install

Créer un fichier .env :

PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
CLOUDINARY_URL=your_cloudinary_url

3. Frontend
cd client
npm install


▶️ Lancement du projet
Backend
cd server
npm run dev
Frontend
cd client
npm start


🧪 Tests
Backend tests
npm run test
Outils utilisés :
Jest
Supertest
Frontend tests
npm run test
Outils :
React Testing Library
Cypress (E2E)


📁 Organisation du projet
natura-sanat/
│
├── client/               # Frontend React
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── context/
│
├── server/               # Backend Express
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── config/
│
├── README.md
└── package.json


🔄 CI/CD & Qualité
SCM (Git Flow)
main → production
develop → développement
feature/* → nouvelles fonctionnalités
hotfix/* → corrections urgentes
QA Strategy
Tests utilisés :
Unit tests (Jest)
Integration tests (Supertest)
E2E tests (Cypress)
API testing (Postman)
Pipeline CI/CD
GitHub Push
   ↓
GitHub Actions
   ↓
Run Tests
   ↓
Build App
   ↓
Deploy (Vercel / Render)
Qualité code
ESLint
Prettier
Code review obligatoire
Architecture MVC


🌍 Déploiement
Service	Plateforme
Frontend	Vercel
Backend	Render / Railway
Database	MongoDB Atlas
Images	Cloudinary

👨‍💻 Auteurs

Projet réalisé par : Gavaud Denis


⭐ Objectif final

Créer une plateforme moderne, scalable et pédagogique autour de la naturothérapie, permettant la mise en relation entre apprenants et professionnels du bien-être.
