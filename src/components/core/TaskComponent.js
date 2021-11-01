import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const TaskComponent = ({
  nextStep,
  prevStep,
  handleTaskInformation,
  sendData,
}) => {
  const [taskList, setTaskList] = useState([]);
  const [index, setIndex] = useState(1);

  const handleAddingToList = () => {
    sendData();
    setIndex(() => index + 1);
    setTaskList(() => taskList.concat(<TaskInput indexElement={index} />));
  };

  useEffect(() => {
    setIndex(1);
    setTaskList([]);
  }, []);

  const TaskInput = ({ indexElement }) => {
    return (
      <div className="grid grid-cols-6 gap-3 py-1 px-2">
        <div className="col-span-4">
          <label htmlFor="article" className="form-input-span phone:text-sm">
            Task
          </label>
          <input
            type="text"
            name="article"
            className="form-input phone:text-xs"
            index={indexElement}
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
            index={indexElement}
            className="form-input phone:text-xs"
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
            index={indexElement}
            className="form-input phone:text-xs"
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
          <TaskInput indexElement={0} />
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
            <button onClick={prevStep} type="submit" className="form-button">
              Back
            </button>
          </div>
          <div className="px-4 py-2 w-full">
            <button type="submit" className="form-button">
              <PDFDownloadLink
                document={<MyDocument />}
                fileName="somename.pdf"
              >
                Download
              </PDFDownloadLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
