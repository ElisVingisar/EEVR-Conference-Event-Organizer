# EEVR-Conference-Event-Organizer

Welcome to the project repository for an Automated Conference/Event Organizing Web System for EEVR (Estonian Virtual and Augmented Reality Association)!
The project wiki can be found here: [Wiki](https://github.com/ElisVingisar/EEVR-Conference-Event-Organizer/wiki).


## Installation
Assuming that the repo is cloned, then You must follow these steps.
1. Install dependencies: "--legacy-peer-deps" flag may be needed.
   ```bash
   cd /EEVR-Conference-Event-Organizer/realiti-express-main
   npm install --legacy-peer-deps
   npm install react-spinners --legacy-peer-deps
2. Running the app: Currently olny dev mode works
   ```bash
   npm run dev
3. Testing the app: This project uses cypress for testing. First, navigate to the cypress folder. Then open cypress, and run e2e tests.
   ```bash
   cd /EEVR-Conference-Event-Organizer/realiti-express-main/cypress
   npx cypress open
