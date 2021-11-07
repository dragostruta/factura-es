import { useEffect, useState } from "react";
import FormComponent from "../../core/FormComponent";
import TaskComponent from "../../core/TaskComponent";

const Home = () => {
  const [step, setStep] = useState(0);
  const [user, setUser] = useState({});
  const [client, setClient] = useState({});

  const sendData = () => {
    fetch("https://obscure-dawn-33870.herokuapp.com/postInformation", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        user: user,
        client: client,
      }),
    })
      .then((response) => response.json)
      .then((response) => {});
  };

  const nextStep = () => {
    fetch("https://obscure-dawn-33870.herokuapp.com/postInformation", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        user: user,
        client: client,
      }),
    })
      .then((response) => response.json)
      .then((response) => {
        setStep(() => step + 1);
      });
  };

  const prevStep = () => {
    setStep(() => step - 1);
  };

  useEffect(() => {
    fetch("https://obscure-dawn-33870.herokuapp.com/getInformation")
      .then((response) => response.json())
      .then((response) => {
        setUser(() => response.user);
        setClient(() => response.client);
      });
  }, []);

  const handleClientInformation = (event) => {
    let { name, value } = event.target;

    if (value === "Select") {
      value = "";
    }

    setClient((prevClient) => ({
      ...prevClient,
      clientInformation: {
        ...prevClient.clientInformation,
        [name]: value,
      },
    }));
  };

  const handleClearClientInformation = () => {
    setClient((prevClient) => ({ ...prevClient, clientInformation: {} }));
    fetch("https://obscure-dawn-33870.herokuapp.com/postInformation", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        user: user,
        client: { ...client, clientInformation: {} },
      }),
    }).then((response) => response.json);
  };

  const handleClearTaskInformation = () => {
    setClient((prevClient) => ({ ...prevClient, taskInformation: {} }));
    fetch("https://obscure-dawn-33870.herokuapp.com/postInformation", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        user: user,
        client: { ...client, taskInformation: {} },
      }),
    }).then((response) => response.json);
  };

  const handleTaskInformation = (event) => {
    let { name, value } = event.target;
    let index = event.target.getAttribute("index");

    setClient((prevClient) => ({
      ...prevClient,
      taskInformation: {
        ...prevClient.taskInformation,
        [index]: { ...prevClient.taskInformation[index], [name]: value },
      },
    }));
  };

  const handleRemoveTaskInformation = () => {
    let newClientTaskInformation = client.taskInformation;

    delete newClientTaskInformation[
      Object.keys(client.taskInformation).length - 1
    ];

    setClient((prevClient) => ({
      ...prevClient,
      taskInformation: newClientTaskInformation,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {step === 0 ? (
        <FormComponent
          client={client}
          handleClearClientInformation={handleClearClientInformation}
          handleClientInformation={handleClientInformation}
          nextStep={nextStep}
        />
      ) : (
        <TaskComponent
          nextStep={nextStep}
          prevStep={prevStep}
          handleTaskInformation={handleTaskInformation}
          sendData={sendData}
          client={client}
          user={user}
          handleClearTaskInformation={handleClearTaskInformation}
          handleRemoveTaskInformation={handleRemoveTaskInformation}
        />
      )}
    </div>
  );
};

export default Home;
