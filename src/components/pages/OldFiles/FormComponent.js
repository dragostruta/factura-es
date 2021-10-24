import React, { useState } from "react";
import { TextField, Typography, Button, ButtonGroup } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import { makeStyles } from "@material-ui/core/styles";
import Description from "./DescriptionComponent";
import { PDFDownloadLink, usePDF } from "@react-pdf/renderer";
import MyDocument from "../../core/MyDocument";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "20px",
  },
}));

const FormPage = () => {
  const [instance, updateInstance] = usePDF({ document: <MyDocument /> });
  const classes = useStyles();
  const [client, setClient] = useState({
    name: "",
    phone: "",
    mobile: "",
    date: "",
  });
  const [descriptions, setDescriptions] = useState([]);
  const [counter, setCounter] = useState(1);
  const [article, setArticle] = useState([]);

  const handleChange = (event) => {
    setClient({ ...client, [event.target.name]: event.target.value });
  };

  const handleChangeDescription = (event) => {
    article[counter - 1].description = event.target.value;
    setArticle(article);
  };

  const handleChangePrice = (event) => {
    article[counter - 1].price = event.target.value;
    setArticle(article);
  };

  const handleChangeQuantity = (event) => {
    article[counter - 1].quantity = event.target.value;
    setArticle(article);
  };

  const handleInputDescriptions = () => {
    setDescriptions([
      ...descriptions,
      <Description
        counter={counter}
        handleDescription={handleChangeDescription}
        handlePrice={handleChangePrice}
        handleQuantity={handleChangeQuantity}
        classes={classes}
      />,
    ]);
    article.push({
      description: "",
      price: 0,
      quantity: 0,
    });
    setArticle(article);
    setCounter(counter + 1);
  };

  return (
    <form noValidate autoComplete="off">
      <Typography variant="h4" component="h2">
        Datos del cliente
      </Typography>
      <TextField
        margin="normal"
        fullWidth
        variant="filled"
        label="Nombre"
        name="name"
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        fullWidth
        variant="filled"
        label="Teléfono"
        name="phone"
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        fullWidth
        variant="filled"
        label="Móvil"
        name="mobile"
        onChange={handleChange}
      />
      <Typography variant="h4" component="h2">
        Fecha
      </Typography>
      <TextField
        type="date"
        margin="normal"
        fullWidth
        variant="filled"
        name="date"
        onChange={handleChange}
      />
      <Typography variant="h4" component="h2">
        ARTÍCULO
      </Typography>
      {descriptions}
      <ButtonGroup variant="contained" size="large" className={classes.margin}>
        <Button
          startIcon={<AddBoxIcon />}
          onClick={handleInputDescriptions}
          color="primary"
        >
          Add
        </Button>
        <Button startIcon={<SaveAltIcon />} color="secondary">
          <PDFDownloadLink
            document={<MyDocument />}
            fileName="somename.pdf"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Download
          </PDFDownloadLink>
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default FormPage;
