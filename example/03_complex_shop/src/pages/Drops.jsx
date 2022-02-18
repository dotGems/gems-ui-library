import React, { useEffect, useState } from 'react';
import { DropCard, DropBanner, DropService } from "@dotGems/react";
import { Grid } from '@mui/material';


export default function Drops() {
  
  const [drops, setDrops] = useState([]);

  useEffect(() =>{
    DropService.getCollectionInfo('eos','pomelo').then((res) => {
      setDrops(res.data.rows);
    });
  }, [])

  return (
    <div>
      <Grid container spacing={{ xs: 3, sm: 4 }}>
        {drops.map((drop) => <Grid
          key={drop.template_id}
          item
          xs={12}
          sm={6}
          md={4}
          style={{display: "flex", justifyContent: "center"}}>
          <DropCard
            data={{
              ...drop,
              listing_price: "1.0000 EOS",
              settlement_symbol: "4,EOS",
            }}
            style={{}}
            config={{onClick: (dropId) => console.log(dropId)}}
          />
        </Grid>)}
        {drops.map((drop) => <DropBanner
            data={{
              ...drop,
              listing_price: "1.0000 EOS",
              settlement_symbol: "4,EOS",
            }}
            style={{}}
            config={{onClick: (dropId) => console.log(dropId)}}
          />)}
      </Grid>
    </div>
  )
}
