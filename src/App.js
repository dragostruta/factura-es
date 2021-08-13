import './App.css';
import {Container, TextField, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

function App() {
  const classes = useStyles();
  const [descriptions, setDescriptions] = useState([]);

  const handleInputDescriptions = () => {
    setDescriptions([...descriptions, 
      <div>
        <TextField  margin="normal" fullWidth id="standard-basic" label="Descripcion" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="Unidat" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="Precio" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="% Dto" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="Dto" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="Total" />
      </div> 
      ]
    );
  }

  return (
    <Container maxWidth="sm">
      <form noValidate autoComplete="off">
        <Typography variant="h4" component="h2">Empresa</Typography>
        <TextField  margin="normal" fullWidth id="standard-basic" label="Nombre" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="Direccion" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="Poblacion" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="Provincia" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="CIF/NIF" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="Correo Electrico" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="Telefono" />
        <Typography variant="h4" component="h2">Datos del cliente</Typography>
        <TextField  margin="normal" fullWidth id="standard-basic" label="Nombre" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="Direccion" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="Poblacion" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="Provincia" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="CIF/NIF" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="Correo Electrico" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="Telefono" />
        <Typography variant="h4" component="h2">Factura</Typography>
        <TextField  margin="normal" fullWidth id="standard-basic" label="Factura N" />
        <TextField  margin="normal" fullWidth id="standard-basic" label="Fecha" />
        <Typography variant="h4" component="h2">Descripcion</Typography>
        {descriptions}
        <Button onClick={handleInputDescriptions} variant="contained" color="primary">
          Add
        </Button>
      </form>
    </Container>
  );
}

export default App;
