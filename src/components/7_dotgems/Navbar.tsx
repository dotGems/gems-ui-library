import React from 'react';
import { makeStyles, useTheme } from '@mui/styles';

import { Button, IconButton, Menu, MenuItem } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { WalletConnect } from '../..';

export interface NavbarProps {
  data: {
    logo: {
      src: string,
      alt: string
    },
    links?: Array<{
      id: string,
      label: string,
      onClick: Function,
    }>,
    activeLink: string,
  },
  config?: {
    hasShadow: boolean
  }
}

const useStyles = makeStyles((theme) => ({
  navContainer: {
    position: 'absolute',
    overflow: "hidden",
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
  navLogo: {
    height: "50px",
    marginRight: "48px",
  },
  activeLink: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
    marginRight: "8px",
    textTransform: "uppercase",
  },
  inactiveLink: {
    color: theme.palette.grey[800],
    marginRight: "8px",
    textTransform: "uppercase",
  },
  navBottom: {
    position: 'absolute',
    overflow: "hidden",
    bottom: 0,
    left: 0,
    right: 0,
    padding: '15px 30px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    [theme.breakpoints.up('md')]: {
      display: "none"
    }
  }
}));

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

  const theme = useTheme();
  const classes = useStyles(theme);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderDesktopLinks = () => (<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
    {data?.links?.map((link) => (
      <Button
        key={link.id}
        size="large"
        onClick={link.onClick}
        className={data?.activeLink?.indexOf(link.id) !== -1 && data?.activeLink?.length === link.id.length ? classes.activeLink : classes.inactiveLink}
      >
        {link.label}
      </Button>
    ))
    }
  </Box >);

  const renderMobileLinks = () => (
    <Box sx={{ display: { xs: data?.links ? 'block' : 'none', md: 'none' } }}>
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
        {data?.links?.map((link) => <MenuItem
          key={link.label}
          onClick={link.onClick}
          className={data?.activeLink?.indexOf(link.id) !== -1 && data?.activeLink?.length === link.id.length ? classes.activeLink : classes.inactiveLink}
        >
          {link.label}
        </MenuItem>)}
      </Menu>
    </Box>
  );

  return (<div className={classes.navContainer}>
    <nav className={classes.navTop}>
      <img className={classes.navLogo} src={data.logo.src} alt={data.logo.alt} />
      {renderDesktopLinks()}
      <Box sx={{display: { xs: 'none', md: 'block' } }}>
        <WalletConnect/>
      </Box>
      {renderMobileLinks()}
    </nav>
    {/*Bottom nav shows in mobile*/}
    <nav className={classes.navBottom}>
      <WalletConnect className={classes.mobileWalletConnect}/>
    </nav>
  </div>);
}