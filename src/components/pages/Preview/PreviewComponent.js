import { PDFViewer } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button, ButtonGroup } from "@material-ui/core";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import MyDocument from "../../core/MyDocument";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "20px",
  },

  preview: {
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    width: "100%",
    height: "90%",
  },

  download: {
    position: "absolute",
    right: "30%",
    bottom: "3%",
  },
}));

const PreviewPage = () => {
  const classes = useStyles();
  return (
    <div>
      <PDFViewer className={classes.preview}>
        <MyDocument />
      </PDFViewer>
      <ButtonGroup
        variant="contained"
        size="large"
        className={(classes.margin, classes.download)}
      >
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
    </div>
  );
};

export default PreviewPage;
