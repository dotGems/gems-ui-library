import React from 'react';
import { makeStyles } from '@mui/styles';
import MuiAvatar from '@mui/material/Avatar';

import { Typography } from '@mui/material';

export interface NavProps {
    data: {
        logo_src: string,
        logo_alt: string,
    },
    config?: {
        hasShadow: boolean
    }
}

const useStyles = makeStyles({
  navContent: {
    position: "relative",
    width: "100%",
  },
  logo: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "70px"
  }
});

const defaultConfig = {
  hasShadow: true
}

/**
 * Displays a nav bar
 *
 * @todo Replace use of MuiButton with our button.
 * @todo Handle className and style
 */
export const Nav = ({
  /*className,*/
  data,
  config = defaultConfig
}: NavProps) => {

    const classes = useStyles();

    return (<nav>
      <div className={classes.navContent}>
        <img className={classes.logo}src={data.logo_src} alt={data.logo_alt}/>
        Hello
      </div>
    </nav>);
};