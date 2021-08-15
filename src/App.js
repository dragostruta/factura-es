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
import { saveAs } from "file-saver";
import JsExcelTemplate from "js-excel-template/browser/browser";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "20px",
  },
}));

function App() {
  const classes = useStyles();
  const [descriptions, setDescriptions] = useState([]);
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [article, setArticle] = useState([]);

  const handleDownload = () => {
    fetch("./test.xlsx")
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => {
        const excelTemplate = JsExcelTemplate.fromArrayBuffer(arrayBuffer);
        excelTemplate.set("name", name);
        excelTemplate.set("phone", phone);
        excelTemplate.set("mobile", mobile);
        excelTemplate.set("date", date);
        saveAs(excelTemplate.toBlob(), "test.xlsx");
      });
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangeMobile = (event) => {
    setMobile(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleInputDescriptions = () => {
    setDescriptions([
      ...descriptions,
      <div key={counter - 1}>
        <Typography># {counter}</Typography>
        <TextField
          margin="normal"
          fullWidth
          variant="filled"
          label="ARTÍCULO"
        />
        <TextField margin="normal" fullWidth variant="filled" label="Tarifa" />
        <TextField margin="normal" fullWidth variant="filled" label="Cant." />
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
            Datos del cliente
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Nombre"
            onChange={handleChangeName}
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Teléfono"
            onChange={handleChangePhone}
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Móvil"
            onChange={handleChangeMobile}
          />
          <Typography variant="h4" component="h2">
            Fecha
          </Typography>
          <TextField
            type="date"
            margin="normal"
            fullWidth
            variant="filled"
            onChange={handleChangeDate}
          />
          <Typography variant="h4" component="h2">
            ARTÍCULO
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
            <Button
              onClick={handleDownload}
              startIcon={<SaveAltIcon />}
              color="secondary"
            >
              Download
            </Button>
          </ButtonGroup>
        </form>
      </Container>
    </div>
  );
}

export default App;
