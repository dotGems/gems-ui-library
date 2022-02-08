import React from 'react';
import { makeStyles } from '@mui/styles';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';

export interface NavbarProps {
  data: {
    logo: {
      src: string,
      alt: string
    },
    links?: Array<{
      label: string,
      onClick: Function,
    }>,
  },
  config?: {
    hasShadow: boolean
  }
}

const useStyles = makeStyles({
  navContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  navTop: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    padding: '15px 30px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  },
  navBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '15px 30px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  },
  navLogo: {
    height: "50px"
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
export const Navbar = ({
  className,
  data,
  config = defaultConfig
}: NavbarProps) => {

  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (<div className={classes.navContainer}>
    <nav className={classes.navTop}>
      <img className={classes.navLogo} src={data.logo.src} alt={data.logo.alt} />
      {data?.links ? <Box>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="nav-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {data?.links?.map((link) => <MenuItem onClick={link.onClick}>{link.label}</MenuItem>)}
        </Menu>
      </Box> : null}
    </nav>
    {/*Bottom nav shows in mobile*/}
    <nav className={classes.navBottom}>
      Bottom
    </nav>
  </div>);
}