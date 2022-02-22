import React, { useEffect, useState } from 'react';
import { DropCard, DropService } from "@dotGems/react";
import { Grid } from '@mui/material';
import {
  useHistory
} from "react-router-dom";

export default function Drops() {
  
  const [drops, setDrops] = useState([]);
  const [error, setError] = useState(undefined);
  const history = useHistory();

  useEffect(() =>{
    DropService.getCollectionInfo('eos','pomelo').then((res) => {
      setDrops(res.data.rows);
    }).catch((err) => {
      setError(err);
    });
  }, [])

  if(!error) {
    return (
      <div>
        {drops.length > 0 ? <Grid container spacing={{ xs: 3, sm: 4 }}>
           {drops.map((drop, index) => <Grid
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
                collection_name: "dotGems"
              }}
              style={{}}
              config={{onClick: () => history.push(`/drops/details/${index}`)}}
            />
          </Grid>)}
        </Grid> : <>Loading...</>}
      </div>
    )
  } else {
    return <span style={{color: "red", fontWeight:"bold"}}>An error occured while fetching the drops.</span>
  }
}
