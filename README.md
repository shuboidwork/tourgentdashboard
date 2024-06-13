# Tour-Agent Dashboard

## Table of Contents
- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
  - [Local env File](#local-env-file)
  - [Generating AUTH_SECRET](#generating-auth_secret)

## Introduction
This is a [Next.js](https://nextjs.org/) application designed for influncers to sell their travel itineraries to potential customers.


## Tech Stack
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [NextAuth.js](https://next-auth.js.org/) for authentication
- [MUI](https://mui.com/material-ui/getting-started) for react component library

## Getting Started

### Prerequisites
Make sure you have the following software installed:
- [Node.js](https://nodejs.org/) (>= 18.x.x)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/shuboidwork/tourgentdashboard.git
    ```
2. Navigate to the project directory:
    ```bash
    cd tourgentdashboard
    ```
3. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application
To run the application in development mode:
```bash
npm run dev
# or
yarn dev
```
## Environment Variables

### Local env File
1. Create a .env.local file
2. Copy the following conent to it 
```text
GOOGLE_CLIENT_ID="<copy the google client id here>"
GOOGLE_CLIENT_SECRET="<copy the client secret here>"
AUTH_SECRET="<put a secret to encrypt jwt token>"
```

### Generating AUTH_SECRET
```bash
npx auth secret
```