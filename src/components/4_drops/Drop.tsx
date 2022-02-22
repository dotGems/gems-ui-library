import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";
import { NFTDisplay, NFTPart } from '../1_core/NFTDisplay';
import { DropModel } from '../../models/Drop.model';
import { DropDetails } from './DropDetails';
import { Box, Card, CircularProgress, Theme } from '@mui/material';
import { DropActionPanel } from './DropActionPanel';
import { DropBanner } from './DropBanner';
import dropAPIs from '../../data/services/drop';
import CountdownTimer from '../1_core/CountDownTimer';

export interface DropProps extends StandardModel {
    config?: {
        nft_display: {
            defaultPart: NFTPart,
            loop: {
                isEnabled: boolean,
                delay: number,
                playFullVideo: boolean
            },
            video: {
                autoplay: boolean
            },
            showSelector: boolean
        },
        details: {
            showArtist?: boolean,
            showCollection?: boolean,
            showAbout?: boolean,
            showBurnableTransferable?: boolean,
            showViewData?: boolean
        }
    },
    dropId: number,
}


const useStyles = makeStyles((theme) => ({
  root:{
    "& .MuiButton-contained": {
      backgroundColor: "#18ab6b",
    },
    "& .MuiButton-contained:hover": {
      backgroundColor: "#0d9258",
    }
  }
}));

export const Drop = ({dropId}:DropProps) => {
    const classes = useStyles();
    const [startTime, setStartTime] = useState(0);
    const [data, setData] = useState<DropModel>();
    // const classes = useStyles();

    
    useEffect(() => {
      dropAPIs.getDropInfo().then((resp:any) => {
            resp.data.rows.forEach((item:any) => {
                if(item.drop_id === dropId){
                  const templateID = item.assets_to_mint[0].template_id;
                  setStartTime(() => item.start_time)
                  dropAPIs.getCollectionInfo("eos", item.collection_name).then((res:any)=> {
                    res.data.rows.forEach((row:any) => {
                      if(templateID === row.template_id ){
                        setData({ ...row, ...item })
                      }
                      })
                  })
                }
            })
        });
    }, []);


    const dropConfig = {
        nft_display: {
            defaultPart: NFTPart.img,
            loop: {
            isEnabled: false,
            delay: 3000,
            playFullVideo: true
            },
            video: {
            autoplay: true
            },
            showSelector: true
        },
        details: {
            showArtist: true,
            showCollection: true,
            showAbout: true,
            showBurnableTransferable: true,
            showViewData: true
        }
    }

    return (data ?  
            <div className={classes.root} style={{ margin: "8px", display:"contents" }}>
                <Card style={{ borderRadius:"25px", margin: "auto", display: "flex", maxWidth: "1040px", padding:"24px"}}>
                    <DropBanner data={data} config={dropConfig}/>
                </Card>
                <Card style={{ display:"flex", flexDirection:"column", borderRadius:"25px", margin: "25px auto", maxWidth: "1040px", alignItems: "center", justifyContent: "center", padding:"24px"}}>
                    <CountdownTimer startTime={startTime} title={"DROPPING SOON!"}/>
                    <DropActionPanel data={data} elevation={0}/>
                </Card>
            </div> 
        :   <Box sx={{ display: 'flex', justifyContent:"center" }}>
                <CircularProgress />
            </Box>
    )
};