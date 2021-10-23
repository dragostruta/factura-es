import { TextField, Typography, Divider } from "@material-ui/core";

const Description = (props) => {
  const [
    counter,
    handleChangeDescription,
    handleChangePrice,
    handleChangeQuantity,
    classes,
  ] = props;

  return (
    <div key={counter - 1}>
      <Typography># {counter}</Typography>
      <TextField
        margin="normal"
        fullWidth
        variant="filled"
        label="ARTÍCULO"
        onChange={handleChangeDescription}
      />
      <TextField
        margin="normal"
        fullWidth
        variant="filled"
        label="Tarifa"
        onChange={handleChangePrice}
      />
      <TextField
        margin="normal"
        fullWidth
        variant="filled"
        label="Cant."
        onChange={handleChangeQuantity}
      />
      <Divider className={classes.margin} variant="middle" />
    </div>
  );
};

export default Description;
