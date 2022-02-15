import { Navbar, DotGemsWrapper, Footer } from "@dotgems/react";

import './App.scss';

function App() {

  const navbarData = {
      logo: {
        src: "/img/dotGems_logo.png",
        alt: "dotGems Logo"
      },
      links: [
        {
          id: "discover",
          label: "Discover",
          onClick: () => console.log('discover'),
        },
        {
          id: "drops",
          label: "Drops",
          onClick: () => console.log('drops'),
        },
        {
          id: "market",
          label: "Market",
          onClick: () => console.log('market'),
        },
        {
          id: "constructs",
          label: "Constructs",
          onClick: () => console.log('constructs'),
        },
      ],
      activeLink: "discover"
    };

  const footerData = {
    logo: {
      src: '/img/dotGems_logo.png',
      alt: 'dotGems Logo',
    },
  }

  return (
    <div className="App">
      <DotGemsWrapper>
        <Navbar data={navbarData}/>
        <Footer data={footerData}/>
      </DotGemsWrapper>
    </div>
  );
}

export default App;
