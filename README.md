# EEVR-Conference-Event-Organizer

Welcome to the project repository for an Automated Conference/Event Organizing Web System for EEVR (Estonian Virtual and Augmented Reality Association)!
The project wiki can be found here: [Wiki](https://github.com/ElisVingisar/EEVR-Conference-Event-Organizer/wiki).

## Installation
Assuming that the repo is cloned, then You must follow these steps.
### 1. Install dependencies: "--legacy-peer-deps" flag is needed.
   ```bash
   cd /EEVR-Conference-Event-Organizer/realiti-express-main
   npm install --legacy-peer-deps
   npm install react-spinners --legacy-peer-deps
   ```
2. Setting up loal variables.
   - In the folder `/EEVR-Conference-Event-Organizer/realiti-express-main` create a new file called `.env`.
   - ***Contact the team members for the contents of the `.env` file.***
   - Copy the necessary local variables into the `.env` file and save.
     
### 2. Running the app
Assuming You are located in the `/EEVR-Conference-Event-Organizer/realiti-express-main` directory.
   - Running the app in dev mode: 
   ```bash
   npm run dev
   ```
   - Running the build:
   ```bash
   npm run build
   ```
### 3. Testing the app: 
This project uses cypress for testing. First, navigate to the cypress folder. Then open cypress, and run e2e tests.
   ```bash
   cd /EEVR-Conference-Event-Organizer/realiti-express-main/cypress
   npx cypress open
   ```

## Database Setup Instructions
This project uses a serverless Vercel PostgreSQL database. It should be working, if You have saved the correct local variables to the `.env` file.
### 3. Verify Connection
Test the connection by running the application to ensure it can connect to the database without errors.

## Accessing the deployed app
This app is accesible on [App](https://realiti-express-main.vercel.app/). Here you can access the `/register` page. The `/admin` page is currently inaccessible. 
