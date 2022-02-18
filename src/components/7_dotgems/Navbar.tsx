import React, { useState } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import { Button, Drawer, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';

import { StandardModel } from '../../models/Standard.model';
import { WalletConnect } from '../6_chain/WalletConnect';

export interface NavbarLinks {
  id: string,
  label: string,
  onClick: Function,
}

export interface NavbarProps extends StandardModel {
  data: {
    logo: {
      src: string,
      alt: string
    },
    links?: Array<NavbarLinks>,
  },
  config?: {
    hasShadow: boolean
  },
  activeLink: string,
}

const useStyles = makeStyles((theme) => ({
  navTop: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    padding: '15px 30px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    zIndex: 1000,
    backgroundColor: "white"
  },
  navLogo: {
    height: "50px",
    marginRight: "48px",
  },
  mobileNavDrawer: {
    zIndex: "800 !important"
  },
  mobileNavDrawerContent: {
    padding: "90px 24px",
    display: "flex",
    flexDirection: "column"
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
    position: 'fixed',
    overflow: "hidden",
    bottom: 0,
    left: 0,
    right: 0,
    padding: '15px 30px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    [theme.breakpoints.up('md')]: {
      display: "none"
    },
    zIndex: 1000,
    backgroundColor: "white"
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
  activeLink,
  config = defaultConfig
}: NavbarProps) => {

  const theme = useTheme();
  const classes = useStyles(theme);
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsMobileDrawerOpen(open);
  };

  const getLinkClass = (link: NavbarLinks) => {
    if (activeLink && activeLink.indexOf(link.id) !== -1 && activeLink.length === link.id.length) {
      return classes.activeLink;
    }
    return classes.inactiveLink;
  }

  const renderDesktopLinks = () => (<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
    {data?.links?.map((link) => (
      <Button
        key={link.id}
        size="large"
        onClick={() => link.onClick()}
        className={getLinkClass(link)}
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
        onClick={toggleDrawer(!isMobileDrawerOpen)}
        color="inherit"
      >
        {isMobileDrawerOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer
        anchor={'right'}
        draggable={true}
        className={classes.mobileNavDrawer}
        open={isMobileDrawerOpen}
        onClose={toggleDrawer(false)}>
        <div className={classes.mobileNavDrawerContent}>
          {data?.links?.map((link) => (
            <Button
              key={link.id}
              size="large"
              onClick={() => {
                toggleDrawer(false);
                link.onClick();
              }}
              className={getLinkClass(link)}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </Drawer>
      {/* <Menu
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
          onClick={() => link.onClick()}
          className={getLinkClass(link)}
        >
          {link.label}
        </MenuItem>)}
      </Menu> */}
    </Box>
  );

  return (<>
    <nav className={classes.navTop}>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <img className={classes.navLogo} src={data.logo.src} alt={data.logo.alt} />
        {renderDesktopLinks()}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <WalletConnect />
        </Box>
        {renderMobileLinks()}
      </div>
    </nav>
    {/*Bottom nav shows in mobile*/}
    <nav className={classes.navBottom}>
      <WalletConnect />
    </nav>
  </>);
}