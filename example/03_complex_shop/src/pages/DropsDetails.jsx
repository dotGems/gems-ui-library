import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { DropBanner, DropService, DropActionPanel } from "@dotGems/react";
import { ArrowBack as ArrowBackIcon} from '@mui/icons-material';
import { Button } from '@mui/material';
import NotableDrops from '../components/NotableDrops';

export default function DropsDetails() {
  
  const location = useLocation();
  const history = useHistory();
  const [drops, setDrops] = useState([]);

  useEffect(() =>{
    DropService.getCollectionInfo('eos','pomelo').then((res) => {
      setDrops(res.data.rows);
    });
  }, [])

  if(drops && drops.length > 0) {
    return (
      <div style={{textAlign: "left"}}>
        <Button onClick={() => history.push("/drops")}><ArrowBackIcon style={{marginRight: "8px"}}/>Back</Button>
        <div style={{padding: "24px"}}>
          <DropBanner
            data={{
              ...drops[location.pathname[location.pathname.length - 1]],
              listing_price: "1.0000 EOS",
              settlement_symbol: "4,EOS",
            }}
          />
          <DropActionPanel 
            style={{marginTop: "4em"}}
            data={{
              ...drops[location.pathname[location.pathname.length - 1]],
              listing_price: "1.0000 EOS",
              settlement_symbol: "4,EOS",
            }}/>
            <NotableDrops/>
        </div>
      </div>
    )
  } else {
    return <>Loading...</>
  }
}
