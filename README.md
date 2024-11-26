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
   - Copy the contents of the `/EEVR-Conference-Event-Organizer/realiti-express-main/.env.example` into `.env`.
     
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
These instructions are intended for running the application locally.
### 1. Create a Database
   - Ensure you have a database server (e.g., PostgreSQL, MongoDB, MySQL) installed and running.
   - Create a database with the name `payload_database` on your database server.

### 2. Update the `.env` File
   - Open the `.env` file in the root directory of the project.
   - Add the database connection URL in the following format:
      ```bash
      DATABASE_URL=<your-database-connection-string>
   
   - Replace `<your-database-connection-string>` with the appropriate connection string for your database. Examples:
   - **PostgreSQL**: `postgresql://username:password@localhost:5432/payload_database`

### 3. Verify Connection
Test the connection by running the application to ensure it can connect to the database without errors.

## Accessing the deployed app
This app is accesible on [App](https://realiti-express-main.vercel.app/). Here you can access the `/register` page. The `/admin` page is currently inaccessible. 
