import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
// import { makeStyles } from '@mui/styles';

import { StandardCoreModel } from "../../models/StandardCore.model";
import { StandardSize } from '../../models/Standard.model';

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

// const useStyles = makeStyles({}});

export const defaultConfig = {
    maxQty: 10,
    isEditable: false,
    onChange: () => { },
    custom: {
        isRounded: undefined,
    }
}

export const QtyControl = ({
    // className,
    // style,
    size,
    config = defaultConfig,
    // data
}: QtyControlProps) => {

    // const classes = useStyles();
    const [count, setCount] = useState<number>(1);

    const handleCount = (val: number) => {
        if (config.onChange) {
            config.onChange(val);
        }
        setCount(val);
    }

    const handleCountDown = () => {
        if (count > 1) {
            handleCount(count - 1);
        }
    }

    const handleCountUp = () => {
        if (config?.maxQty) {
            if (count < config.maxQty) {
                handleCount(count + 1);
            }
        } else {
            handleCount(count + 1);
        }
    }

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <Button
                disabled={count <= 1}
                variant="contained"
                onClick={handleCountDown}
                style={
                    size === StandardSize.lg ? { padding: "10px", minWidth: 0, width: "44px", display: "inline-block" } :
                        size === StandardSize.md ? { padding: "8px", minWidth: 0, width: "40px", display: "inline-block" } :
                            { padding: "0px", minWidth: 0, width: "30px", display: "inline-block" }}>
                -
            </Button>
            <Typography
                variant="body1"
                style={size === StandardSize.lg ? { padding: "0 20px", display: "inline-block" } :
                    size === StandardSize.md ? { padding: "0 18px", display: "inline-block" } :
                        { padding: "0 10px", display: "inline-block" }}>
                {count}
            </Typography>
            <Button
                disabled={config.maxQty ? count >= config.maxQty : false}
                variant="contained"
                onClick={handleCountUp}
                style={
                    size === StandardSize.lg ? { padding: "10px", minWidth: 0, width: "44px", display: "inline-block" } :
                        size === StandardSize.md ? { padding: "8px", minWidth: 0, width: "40px", display: "inline-block" } :
                            { padding: "0px", minWidth: 0, width: "30px", display: "inline-block" }}>
                +
            </Button>
        </div>
    );
};