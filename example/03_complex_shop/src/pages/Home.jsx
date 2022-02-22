import React from 'react';

import HomeHeader from '../components/HomeHeader';
import NotableDrops from '../components/NotableDrops';

export default function Home() {
  return (
    <div style={{padding: "24px"}}>
      <HomeHeader/>
      <NotableDrops/>
    </div>
  )
}
