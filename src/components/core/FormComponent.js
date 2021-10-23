const FormComponent = () => {
  return (
    <div className="bg-gray-light rounded-md p8 shadow-2x1 w-1/2 phone:w-full">
      <div className="mt-2">
        <div>
          <div>
            <div className="px-2 py-3">
              <h3 className="text-4xl font-bold text-center text-black">
                Client Information
              </h3>
            </div>
          </div>
          <div className="">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden">
                <div className="px-4 py-5">
                  <div className="grid grid-cols-6 gap-3">
                    <div className="col-span-6">
                      <label for="first-name" className="form-input-span">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        className="form-input"
                      />
                    </div>

                    <div className="col-span-6">
                      <label for="first-name" className="form-input-span">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        className="form-input"
                      />
                    </div>

                    <div className="col-span-6">
                      <label for="first-name" className="form-input-span">
                        Email
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        className="form-input"
                      />
                    </div>

                    <div className="col-span-6">
                      <label for="country" className="form-input-span">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autocomplete="country-name"
                        className="form-input"
                      >
                        <option selected>Spain</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label for="first-name" className="form-input-span">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        className="form-input"
                      />
                    </div>

                    <div className="col-span-6">
                      <label for="first-name" className="form-input-span">
                        City
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        className="form-input"
                      />
                    </div>

                    <div className="col-span-6">
                      <label for="first-name" className="form-input-span">
                        Zip / Postal Code
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="px-4 py-3 pb-12 w-full">
                    <button type="submit" className="form-button">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
