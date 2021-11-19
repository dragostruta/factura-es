import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: "column",
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    "@media max-width: 400": {
      width: "100%",
      paddingRight: 0,
    },
    "@media orientation: landscape": {
      width: 200,
    },
  },
  footer: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 15,
    paddingTop: 5,
    borderWidth: 3,
    borderColor: "gray",
    borderStyle: "dashed",
    "@media orientation: landscape": {
      marginTop: 10,
    },
  },
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#112131",
    borderBottomStyle: "solid",
    alignItems: "stretch",
  },
  detailColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  linkColumn: {
    flexDirection: "column",
    flexGrow: 2,
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    justifySelf: "flex-end",
    paddingBottom: 5,
  },
  subtitleName: {
    fontSize: 10,
    fontWeight: "bold",
    justifySelf: "flex-end",
    paddingBottom: 10,
    paddingTop: 5,
  },
  subtitleDate: {
    fontSize: 10,
    fontWeight: "bold",
    justifySelf: "flex-end",
    paddingBottom: 10,
    paddingTop: 10,
  },
});

const Header = ({ client, user }) => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>
        Presupuesto PINTURA{user?.facturalNumber ?? "-"}
      </Text>
      <Text style={styles.subtitle}>CLIENTE</Text>
      <Text style={styles.subtitleName}>
        {client?.clientInformation?.name ?? "Name"}
      </Text>
      <Text style={styles.subtitle}>
        <Text style={styles.subtitleName}>Teléfono: </Text>
        <Text>{client?.clientInformation?.phone ?? "-"}</Text>
      </Text>
      <Text style={styles.subtitle}>
        <Text style={styles.subtitleName}>Móvil: </Text>
        <Text>{client?.clientInformation?.mobile ?? "-"}</Text>
      </Text>
    </View>
    <View style={styles.linkColumn}></View>
  </View>
);

const SubHeader = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <View style={styles.container}>
      <View style={styles.detailColumn}>
        <Text style={styles.subtitleDate}>FECHA: {date}</Text>
      </View>
      <View style={styles.linkColumn}></View>
    </View>
  );
};

const Table = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}></View>
    </View>
  );
};

// Create Document Component
const MyDocument = ({ client, user }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header client={client} user={user} />
        <SubHeader />
        <Table />
      </Page>
    </Document>
  );
};

export default MyDocument;
