import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';

import { StandardCoreModel } from "../../models/StandardCore.model";
import { Button } from './Button';
import { Typography } from '@mui/material';

export interface QtyControlProps extends StandardCoreModel {
    config: {
        maxQty?: number,
        isEditable: boolean,
        onChange: Function,
        custom?: {
            isRounded?: boolean
        }
    }
}

// const useStyles = makeStyles({});

export const defaultConfig = {
    maxQty: 10,
    isEditable: false,
    onChange: () => {},
    custom: {
        isRounded: undefined,
    }
}

/**
 * 
 */
export const QtyControl = ({
    // className,
    // style,
    // size,
    config = defaultConfig,
    // data
}: QtyControlProps) => {

    // const classes = useStyles();
    const [count, setCount] = useState<number>(1);

    const handleCount = (val: number) => {
        if(config.onChange) {
            config.onChange(val);
        }
        setCount(val);
    }

    const handleCountDown = () => {
        if(count > 0) {
            handleCount(count - 1);
        }
    }

    const handleCountUp = () => {
        if(config?.maxQty) {
            if(count < config.maxQty) {
                handleCount(count + 1);
            }
        } else {
            handleCount(count + 1);
        }
    }

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <Button disabled={count <= 0} label={"-"} variant="contained" onClick={handleCountDown} style={{padding: "0", minWidth: 0, width: "30px", display: "inline-block"}}/>
            <Typography variant="body1" style={{padding: "0 0.5em", display: "inline-block"}}>{count}</Typography>
            <Button disabled={config.maxQty? count >= config.maxQty : false} label={"+"} variant="contained" onClick={handleCountUp} style={{padding: "0", minWidth: 0, width: "30px", display: "inline-block"}}/>
        </div>
    );
};