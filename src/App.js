import "./App.css";
import {
  Container,
  TextField,
  Typography,
  Button,
  ButtonGroup,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import "@fontsource/roboto";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "20px",
  },
}));

function App() {
  const classes = useStyles();
  const [descriptions, setDescriptions] = useState([]);
  const [counter, setCounter] = useState(1);

  const handleInputDescriptions = () => {
    setDescriptions([
      ...descriptions,
      <div>
        <Typography># {counter}</Typography>
        <TextField
          margin="normal"
          fullWidth
          variant="filled"
          label="Descripcion"
        />
        <TextField margin="normal" fullWidth variant="filled" label="Unidat" />
        <TextField margin="normal" fullWidth variant="filled" label="Precio" />
        <TextField margin="normal" fullWidth variant="filled" label="% Dto" />
        <TextField margin="normal" fullWidth variant="filled" label="Dto" />
        <TextField margin="normal" fullWidth variant="filled" label="Total" />
        <Divider className={classes.margin} variant="middle" />
      </div>,
    ]);
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form noValidate autoComplete="off">
          <Typography variant="h4" component="h2">
            Empresa
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Nombre"
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Direccion"
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Poblacion"
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Provincia"
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="CIF/NIF"
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Correo Electrico"
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Telefono"
          />
          <Typography variant="h4" component="h2">
            Datos del cliente
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Nombre"
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Direccion"
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Poblacion"
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Provincia"
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="CIF/NIF"
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Correo Electrico"
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Telefono"
          />
          <Typography variant="h4" component="h2">
            Factura
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Factura N"
          />
          <TextField margin="normal" fullWidth variant="filled" label="Fecha" />
          <Typography variant="h4" component="h2">
            Descripcion
          </Typography>
          {descriptions}
          <ButtonGroup
            variant="contained"
            size="large"
            className={classes.margin}
          >
            <Button
              startIcon={<AddBoxIcon />}
              onClick={handleInputDescriptions}
              color="primary"
            >
              Add
            </Button>
            <Button startIcon={<SaveAltIcon />} color="secundary">
              Download
            </Button>
          </ButtonGroup>
        </form>
      </Container>
    </div>
  );
}

export default App;
