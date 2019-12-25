/** @jsx jsx */
import { Header as ThemeHeader, jsx } from 'theme-ui'
import { useState } from 'react'
import { Link, navigate } from 'gatsby'
import ShoppingCartIcon from './shopping-cart-icon'
import { Menu, MenuItem, Button } from '@material-ui/core'
import { useCart } from 'gatsby-theme-stripe-storefront/src/context/shopping-cart'

const Header = ({ links }) => {
  const { handleCloseCart } = useCart()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = e => {
    handleCloseCart()
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    handleCloseCart()
    setAnchorEl(null)
  }

  const changeRoute = route => {
    handleCloseCart()
    navigate(route)
  }
  return (
    <ThemeHeader>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          '@media(max-width: 675px)': {
            display: 'none',
          },
        }}
      >
        {links.map(link => (
          <Link
            key={link}
            sx={{
              color: 'text',
              display: 'flex',
              alignItems: 'center',
            }}
            to={link === 'home' ? '/' : link}
          >
            {link.toUpperCase()}
          </Link>
        ))}
        <ShoppingCartIcon />
      </div>
      <div
        sx={{
          display: 'none',
          '@media(max-width: 675px)': {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          },
        }}
      >
        <Button
          aria-controls="nav-menu"
          aria-haspopup="true"
          onClick={handleClick}
          sx={{
            color: 'primaryText',
          }}
        >
          Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          {links.map(link => (
            <MenuItem onClick={() => changeRoute(link === 'home' ? '/' : link)}>
              {link.toUpperCase()}
            </MenuItem>
          ))}
        </Menu>
        <ShoppingCartIcon />
      </div>
    </ThemeHeader>
  )
}

export default Header
