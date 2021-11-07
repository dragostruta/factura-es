const FormComponent = ({
  nextStep,
  handleClientInformation,
  client,
  handleClearClientInformation,
}) => {
  return (
    <div className="bg-gray-light rounded-md p8 shadow-lg w-1/2 phone:w-full">
      <div className="mt-2">
        <div>
          <div>
            <div className="px-2 py-1">
              <h3 className="text-3xl font-bold text-center text-black">
                Client Information
              </h3>
            </div>
          </div>
          <div className="">
            <>
              <div className="shadow overflow-hidden">
                <div className="px-4 pb-1">
                  <div className="grid grid-cols-6 gap-3">
                    <div className="col-span-6">
                      <label htmlFor="name" className="form-input-span">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-input"
                        value={client.clientInformation?.name ?? ""}
                        onChange={handleClientInformation}
                      />
                    </div>

                    <div className="col-span-3">
                      <label htmlFor="phone" className="form-input-span">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="form-input"
                        value={client.clientInformation?.phone ?? ""}
                        onChange={handleClientInformation}
                      />
                    </div>

                    <div className="col-span-3">
                      <label htmlFor="mobile" className="form-input-span">
                        Mobile
                      </label>
                      <input
                        type="text"
                        name="mobile"
                        id="mobile"
                        className="form-input"
                        value={client.clientInformation?.mobile ?? ""}
                        onChange={handleClientInformation}
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="email" className="form-input-span">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-input"
                        value={client.clientInformation?.email ?? ""}
                        onChange={handleClientInformation}
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="country" className="form-input-span">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        className="form-input"
                        value={client.clientInformation?.country ?? "Select"}
                        onChange={handleClientInformation}
                      >
                        <option>Select</option>
                        <option>Spain</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="form-input-span"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="streetAddress"
                        id="street-address"
                        className="form-input"
                        value={client.clientInformation?.streetAddress ?? ""}
                        onChange={handleClientInformation}
                      />
                    </div>

                    <div className="col-span-3">
                      <label htmlFor="city" className="form-input-span">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="form-input"
                        value={client.clientInformation?.city ?? ""}
                        onChange={handleClientInformation}
                      />
                    </div>

                    <div className="col-span-3">
                      <label htmlFor="postal-code" className="form-input-span">
                        Zip / Postal Code
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        id="postal-code"
                        className="form-input"
                        value={client.clientInformation?.postalCode ?? ""}
                        onChange={handleClientInformation}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="px-4 py-2 w-full">
                    <button
                      onClick={nextStep}
                      type="submit"
                      className="form-button"
                    >
                      Next
                    </button>
                  </div>
                  <div className="px-4 py-2 w-full">
                    <button
                      onClick={handleClearClientInformation}
                      type="submit"
                      className="form-button bg-red-600 focus:bg-red-500 hover:bg-red-600"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
