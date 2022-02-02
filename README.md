<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/dotGems">
    <img src="https://avatars.githubusercontent.com/u/75587337?s=200&v=4" alt="dotGems Logo">
  </a>

  <h3 align="center">dotGems React UI Library</h3>

![Package Version](https://img.shields.io/npm/v/@dotgems/ui?style=flat-square)
![Build Status](https://img.shields.io/cirrus/github/dotGems/gems-ui-library?style=flat-square)
![License](https://img.shields.io/npm/l/@dotgems/ui?style=flat-square)

  <p align="center">
    A React UI Library for building NFT marketplaces based on EOSIO.
    <br />
    <!-- <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a> 
    · -->
    <a href="https://github.com/dotGems/gems-ui-library/issues/new?assignees=&labels=bug&template=bug-report.md&title=">Report Bug</a>
    ·
    <a href="https://github.com/dotGems/gems-ui-library/issues/new?assignees=&labels=&template=feature-request.md&title=">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<br/>

<!-- ABOUT THE PROJECT -->
## About The Project

Building an NFT marketplace is no small feat. It requires a lot of different kind of expertise and is a time consuming task. With the dotGems UI Library, we aim to simplify the development of NFT marketplaces based on EOSIO by providing core components to help you develop and ship faster.

Currently, we focus on building reusable components for React, but we are considering making a Vue compatible version once this one is more stable and mature.

### Built With

* [React](https://reactjs.org/)
* [Storybook](https://storybook.js.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Material UI](https://mui.com/)

## Getting Started

If you wish to contribute to the project, please the README under `src`. Otherwise, proceed to the installation section.

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/oreus-initiative/split.backend
   ```
2. Install Dependencies
   ```sh
   npm install
   ```
3. Create your environment file `.env` at the project's root.

```js
    # SETUP DEVELOPMENT / PRODUCTION ENVIRONMENT
    NODE_ENV=development                # development, test or production
    DEBUG_LEVEL=debug                   # See winston logging levels

    # GLOBAL SETTINGS
    SALT_ROUNDS=YOUR_SALT_ROUNDS        # Suggested: 10
    JWT_SECRET_KEY=YOUR_SECRET_KEY      # Generate using `node -e "console.log(require('crypto').randomBytes(256).toString('base64'))"`

    # DATABASE CONNECTION
    DB_CLIENT=YOUR_DATABASE_CLIENT      # Default: pg
    DB_HOST=YOUR_DATABASE_HOST          # Default: 127.0.0.1
    DB_PORT=YOUR_DATABASE_PORT          # Default: 5433
    DB_USER=YOUR_DATABASE_USER          # Default: postgres
    DB_PASSWORD=YOUR_DATABASE_PASSWORD  # Default: postgres
    DB_NAME=YOUR_DATABASE_NAME          # Suggested: "oreus-split"

    # Establishes Google OAuth connection for mailing
    # To retrieve those values, see the docs.
    GOOGLE_USER=PROVIDED_GMAIL          # Request it at info@oreus.ca
    GOOGLE_CLIENT_ID=PROVIDED_CLIENT_ID # Request it at info@oreus.ca
    GOOGLE_SECRET=PROVIDED_SECRET       # Request it at info@oreus.ca
    GOOGLE_REDIRECT_URI                 # Request it at info@oreus.ca
    GOOGLE_REFRESH                      # Request it at info@oreus.ca
```

At the root of the project, we also provide the insomnia_apidoc.json file, that can be imported into the Insomnia HTTP Client to better understand and test the API.

<!-- USAGE EXAMPLES -->
## Usage

```js
// TODO
```


<!-- ROADMAP -->
## Roadmap

Our roadmap is described using milestones associated to issues, please refer to those to understand our roadmap.


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the GNUv3 License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Dominic Fournier - [@DominicF96](https://twitter.com/DominicF96) - me@dominicfournier.com

Project Link: [https://github.com/oreus-initiative/split.backend/projects/1](https://github.com/oreus-initiative/split.backend/projects/1)


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [Express](https://expressjs.com/)

## Special Thanks

Special thanks to all [Pomelo donors who contributed to help kickstart this project](https://pomelo.io/grants/ems.oreus) !

<p align="right">(<a href="#top">back to top</a>)</p>