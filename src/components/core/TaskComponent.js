import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const TaskComponent = ({ nextStep, prevStep }) => {
  const [taskList, setTaskList] = useState([]);
  const handleAddingToList = () => {
    setTaskList(() => taskList.concat(<TaskInput />));
  };
  const TaskInput = () => {
    return (
      <div className="grid grid-cols-6 gap-3 py-1 px-2">
        <div className="col-span-4">
          <label htmlFor="first-name" className="form-input-span phone:text-sm">
            Articol
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="form-input"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="first-name" className="form-input-span phone:text-sm">
            Tarif €
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="form-input"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="first-name" className="form-input-span phone:text-sm">
            Cant.
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="form-input"
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
          <TaskInput />
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
              Previous
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
