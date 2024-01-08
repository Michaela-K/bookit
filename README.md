<a id="readme-top"></a>

<h1 align="center"> BookIt </h1>
Quickly get everyone to agree on the meetup, whether its family, coworkers or class mates. 
<br/>
Create an event and quickly send out the invite link and see who's coming.
<br />

<h3 align="center">
  <a href=""> Live Demo *WIP*</a> | <a href="https://github.com/michaela-k/bookit/issues"> Report a Bug </a>
</h3>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About the Project <a id="about"></a>

![Bookit Demo](client/public/bookit_demo-GIF.gif)

### Built With

- React
- PostgreSQL
- ExpressJS
- NodesJs
- Dayjs
- FullCalendar
- Material UI

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- GETTING STARTED -->

## Getting Started <a id="getting-started"></a>

### Installation <a id="installation"></a>

1. Clone the repo
   ```sh
   git clone git@github.com:Michaela-K/bookit.git
   ```
2. Install NPM packages in the root directory
   ```sh
   cd bookit
   npm install
   ```
3. Set Up Configuration in React App -
In your React project, create a ".env" file in the server directory - Add your configuration to this file as environment variables:
   ```sh
    REACT_PORT=
    REACT_DB_PORT=
    REACT_DB_HOST=
    REACT_DB_USER=
    REACT_DB_NAME=
    REACT_DB_PASS=
    ```
4. Open your terminal and Create a database in PostgreSQL
    ```sh
    psql -U postgres
    CREATE DATABASE bookit;
    \c bookit
    ```
4. Open a separate terminal window/tab and start the app in the client
   ```sh
   cd client
   npm start
   Visit http://localhost:3000/
   ```
5. Open a third terminal window/tab and start the app in the server
   ```sh
   cd server
   npm start
   Visit http://localhost:4000/api/events
   ```

   <p align="right"><a href="#readme-top">back to top</a></p>

## Features <a id="features"></a>

- [ ] Host the project (Work in Progress)
- [x] Add new event
- [x] Create event link
- [x] Display event on FullCalendar
- [x] Edit event
- [x] Delete event
- [x] Users confirm attendance(added to database)

<p align="right"><a href="#readme-top">back to top</a></p>
