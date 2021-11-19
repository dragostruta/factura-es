import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import axios from "axios";

const TaskComponent = ({
  nextStep,
  prevStep,
  handleTaskInformation,
  sendData,
  handleClearTaskInformation,
  handleRemoveTaskInformation,
  client,
  user,
}) => {
  const [taskList, setTaskList] = useState([]);
  const [index, setIndex] = useState(0);

  const handleAddingToList = () => {
    sendData();
    setIndex(() => index + 1);
    setTaskList(() => taskList.concat(<TaskInput indexElement={index + 1} />));
  };

  const handleRemoveTask = () => {
    if (taskList.length > 1) {
      let newTaskList = taskList;
      newTaskList.pop();
      setIndex(() => index - 1);
      setTaskList(newTaskList);
      handleRemoveTaskInformation();
    }
  };

  const handleClearTaskList = () => {
    setIndex(0);
    setTaskList([<TaskInput indexElement={0} />]);
    handleClearTaskInformation();
  };

  useEffect(() => {
    setIndex(0);
    if (Object.keys(client.taskInformation).length > 0) {
      let newTaskList = [];
      for (let i = index; i < Object.keys(client.taskInformation).length; i++) {
        newTaskList.push(
          <TaskInput
            indexElement={i}
            task={client.taskInformation[i]?.task}
            price={client.taskInformation[i]?.price}
            count={client.taskInformation[i]?.count}
          />
        );
      }
      setTaskList(newTaskList);
    } else {
      setTaskList([<TaskInput indexElement={index} />]);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const createAndDonwloadPdf = () => {
    sendData();
    axios
      .post("https://obscure-dawn-33870.herokuapp.com/createPdf", {
        user: user,
        client: client,
      })
      .then(() =>
        axios.get("https://obscure-dawn-33870.herokuapp.com/fetchPdf", { responseType: "blob" })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });
  };

  const TaskInput = ({ indexElement, task, price, count }) => {
    return (
      <div className="grid grid-cols-6 gap-3 py-1 px-2">
        <div className="col-span-4">
          <label htmlFor="task" className="form-input-span phone:text-sm">
            Task
          </label>
          <input
            type="text"
            name="task"
            id={"task-" + indexElement}
            className="form-input phone:text-xs"
            index={indexElement}
            defaultValue={task ?? ""}
            onChange={handleTaskInformation}
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="price" className="form-input-span phone:text-sm">
            Price €
          </label>
          <input
            type="text"
            name="price"
            id={"price-" + indexElement}
            index={indexElement}
            className="form-input phone:text-xs"
            defaultValue={price ?? ""}
            onChange={handleTaskInformation}
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="count" className="form-input-span phone:text-sm">
            Cant.
          </label>
          <input
            type="text"
            name="count"
            id={"count-" + indexElement}
            index={indexElement}
            className="form-input phone:text-xs"
            defaultValue={count ?? ""}
            onChange={handleTaskInformation}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-light rounded-md p8 shadow-lg w-1/2 phone:w-full">
      <div className="mt-2">
        <div>
          <div className="px-2 py-3">
            <h3 className="text-3xl font-bold text-center text-black">
              Task Information
            </h3>
          </div>
        </div>
        <div id="task-input-list">
          {taskList.map((element, index) => {
            return <div key={index}>{element}</div>;
          })}
        </div>
        <div>
          <div className="px-4 py-2 w-full">
            <button
              onClick={handleAddingToList}
              type="submit"
              className="form-button"
            >
              Add
            </button>
          </div>
          <div className="px-4 py-2 w-full">
            <button
              onClick={handleRemoveTask}
              type="submit"
              className="form-button bg-red-600 focus:bg-red-500 hover:bg-red-600"
            >
              Remove
            </button>
          </div>
          <div className="px-4 py-2 w-full">
            <button onClick={prevStep} type="submit" className="form-button">
              Back
            </button>
          </div>
          <div className="px-4 py-2 w-full">
            <button
              onClick={createAndDonwloadPdf}
              type="submit"
              className="form-button"
            >
              Download
            </button>
          </div>
          <div className="px-4 py-2 w-full">
            <button
              onClick={handleClearTaskList}
              type="submit"
              className="form-button bg-red-600 focus:bg-red-500 hover:bg-red-600"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
