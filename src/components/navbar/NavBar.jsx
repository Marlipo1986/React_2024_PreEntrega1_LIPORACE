import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import CartWidget from "../cartWidget/CartWidget";


const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <FoodBankIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          RESTAURAPP - PreEntrega React - Martin Liporace
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Entradas</Button>
          <Button color="inherit">Principales</Button>
          <Button color="inherit">Postres</Button>
          <CartWidget/>
        </Stack>
      </Toolbar>
      
    </AppBar>
  );
};

export default NavBar;
