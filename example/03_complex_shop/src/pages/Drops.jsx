import React from 'react';
import { Grid } from '@mui/material';

import { DropCard } from "@dotGems/react";

import dropsData from '../data/drops.data';

export default function Drops() {
  
  return (
    <div>
      <Grid container spacing={{ xs: 3, sm: 4 }}>
        {[]
        .concat(dropsData)
        .map((drop) => <Grid item xs={12} sm={6} md={4} style={{display: "flex", justifyContent: "center"}}>
          <DropCard
            data={drop}
            style={{}}
            config={{onClick: (dropId) => console.log(dropId)}}
          />
        </Grid>)}
      </Grid>
    </div>
  )
}
