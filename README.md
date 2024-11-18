# EEVR-Conference-Event-Organizer

Welcome to the project repository for an Automated Conference/Event Organizing Web System for EEVR (Estonian Virtual and Augmented Reality Association)!
The project wiki can be found here: [Wiki](https://github.com/ElisVingisar/EEVR-Conference-Event-Organizer/wiki).


## Installation
Assuming that the repo is cloned, then You must follow these steps.
1. Install dependencies: "--legacy-peer-deps" flag may be needed.
   ```bash
   cd /EEVR-Conference-Event-Organizer/realiti-express-main
   npm install
   npm install react-spinners --legacy-peer-deps
2. Database setup: Ensure You have a database instance running (e.g., PostgreSQL, MySQL, etc.). Update your database connection URL in the .env file. Initialize prisma and run migrations.
   ```bash
   npx prisma init
   npx prisma migrate dev --name init
3. Running the app: Currently olny dev mode works
   ```bash
   npm run dev
5. Testing the app: This project uses cypress for testing. First, navigate to the cypress folder. Then open cypress, and run e2e tests.
   ```bash
   cd /EEVR-Conference-Event-Organizer/realiti-express-main/cypress
   npx cypress open
