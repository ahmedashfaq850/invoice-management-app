import React from "react";
import { BiX, BiSolidTrash, BiPlus } from "react-icons/bi";
import { useState, useEffect } from "react";

const Form = ({ setOpenFormFunc, darkMode }) => {
  const initialData = {
    billFrom: {
      streetAddress: "",
      city: "",
      postCode: "",
      country: "",
    },
    billTo: {
      clientName: "",
      clientEmail: "",
      streetAddress: "",
      city: "",
      postCode: "",
      country: "",
      invoiceDate: "",
      description: "",
    },
  };

  const [invoiceData, setInvoiceData] = useState(initialData);
  const [data, setData] = useState([{invoice: {}, itemsList: []}]);

  const [items, setItems] = useState([
    { id: 1, itemName: "", quantity: 0, price: 0 },
  ]);

  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1,
      itemName: "",
      quantity: 0,
      price: 0,
    };
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleInputChange = (id, field, value) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
  };

  const handleDiscardFunction = () => {
    setOpenFormFunc(false);
  };

  const handleBillFromChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prevData) => ({
      ...prevData,
      billFrom: {
        ...prevData.billFrom,
        [name]: value,
      },
      // Keep billTo unchanged
      billTo: { ...prevData.billTo },
    }));
  };

  const handleBillToChange = (e) => {
    const { name, value } = e.target; // Correct destructuring
    setInvoiceData((prevData) => ({
      ...prevData,
      // Keep billFrom unchanged
      billFrom: { ...prevData.billFrom },
      billTo: { ...prevData.billTo, [name]: value },
    }));
  };

  const handleSaveInvoice = (e) => {
    e.preventDefault();
    console.log('invoice Data is: ', invoiceData)
    console.log('Item Data is Data is: ', items)
    const newData = {
      invoice: invoiceData,
      itemsList: items,
    };

    setData((prevData)=> (
      {
        ...prevData,
        newData 
        
      }
    ))

    console.log('New Data object is: ',newData);
    console.log(data)

    setOpenFormFunc(false);
    setInvoiceData('');
  };

  return (
    <div
      className={`lg:w-[55%] md:w-[65%] w-[100%] ${
        darkMode ? "bg-[#141625] text-white" : "bg-white text-black"
      }  h-full lg:rounded-r-3xl md:rounded-r-3xl p-[20px] lg:p-[60px]`}
    >
      <div className="flex flex-col justify-start gap-5 h-full">
        {/* Header */}
        <div className="flex justify-between items-center pb-7">
          <h1 className="text-[25px] font-bold flex-none ">Create Invoice</h1>
          <div>
            <BiX
              onClick={() => setOpenFormFunc(false)}
              className="cursor-pointer"
              size={30}
            />
          </div>
        </div>
        {/* Body */}
        <div className="min-h-[100px]  flex-grow overflow-y-auto scroll-from">
          <div>
            <h1 className="font-bold mb-4 text-[#6b5dfa] text-sm">Bill From</h1>
            <div className="flex flex-col gap-1">
              <label className="text-gray-400 text-sm" htmlFor="street-address">
                Street Address
              </label>
              <input
                className={`rounded-md h-9 ${
                  darkMode
                    ? "bg-[#1e2139] border-[#1e2139]"
                    : "bg-white border-gray-300"
                } border border-solid focus:outline-purple-300 px-2`}
                type="text"
                name="streetAddress"
                onChange={(e) => handleBillFromChange(e)}
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-5 mt-3">
              <div className="flex flex-col gap-1 w-full">
                <label
                  className="text-gray-400 text-sm"
                  htmlFor="street-address"
                >
                  City
                </label>
                <input
                  className={`rounded-md h-9 ${
                    darkMode
                      ? "bg-[#1e2139] border-[#1e2139]"
                      : "bg-white border-gray-300"
                  } border border-solid focus:outline-purple-300 px-2`}
                  type="text"
                  name="city"
                  onChange={(e) => handleBillFromChange(e)}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  className="text-gray-400 text-sm"
                  htmlFor="street-address"
                >
                  Post Code
                </label>
                <input
                  className={`rounded-md h-9 ${
                    darkMode
                      ? "bg-[#1e2139] border-[#1e2139]"
                      : "bg-white border-gray-300"
                  } border border-solid focus:outline-purple-300 px-2`}
                  type="text"
                  name="postCode"
                  onChange={(e) => handleBillFromChange(e)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full mt-3">
              <label className="text-gray-400 text-sm" htmlFor="street-address">
                Country
              </label>
              <input
                className={`rounded-md h-9 ${
                  darkMode
                    ? "bg-[#1e2139] border-[#1e2139]"
                    : "bg-white border-gray-300"
                } border border-solid focus:outline-purple-300 px-2`}
                type="text"
                name="country"
                onChange={(e) => handleBillFromChange(e)}
              />
            </div>
          </div>
          <div className="mt-5">
            <h1 className="font-bold mb-4 text-[#6b5dfa] text-sm">Bill To</h1>
            <div className="flex flex-col gap-1">
              <label className="text-gray-400 text-sm" htmlFor="street-address">
                Client Name
              </label>
              <input
                className={`rounded-md h-9 ${
                  darkMode
                    ? "bg-[#1e2139] border-[#1e2139]"
                    : "bg-white border-gray-300"
                } border border-solid focus:outline-purple-300 px-2`}
                type="text"
                name="clientName"
                onChange={(e) => handleBillToChange(e)}
              />
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <label className="text-gray-400 text-sm" htmlFor="street-address">
                Client Email
              </label>
              <input
                className={`rounded-md h-9 ${
                  darkMode
                    ? "bg-[#1e2139] border-[#1e2139]"
                    : "bg-white border-gray-300"
                } border border-solid focus:outline-purple-300 px-2`}
                type="text"
                name="clientEmail"
                onChange={(e) => handleBillToChange(e)}
              />
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <label className="text-gray-400 text-sm" htmlFor="street-address">
                Street Address
              </label>
              <input
                className={`rounded-md h-9 ${
                  darkMode
                    ? "bg-[#1e2139] border-[#1e2139]"
                    : "bg-white border-gray-300"
                } border border-solid focus:outline-purple-300 px-2`}
                type="text"
                name="streetAddress"
                onChange={(e) => handleBillToChange(e)}
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-5 mt-3">
              <div className="flex flex-col gap-1 w-full">
                <label
                  className="text-gray-400 text-sm"
                  htmlFor="street-address"
                >
                  City
                </label>
                <input
                  className={`rounded-md h-9 ${
                    darkMode
                      ? "bg-[#1e2139] border-[#1e2139]"
                      : "bg-white border-gray-300"
                  } border border-solid focus:outline-purple-300 px-2`}
                  type="text"
                  name="city"
                  onChange={(e) => handleBillToChange(e)}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  className="text-gray-400 text-sm"
                  htmlFor="street-address"
                >
                  Post Code
                </label>
                <input
                  className={`rounded-md h-9 ${
                    darkMode
                      ? "bg-[#1e2139] border-[#1e2139]"
                      : "bg-white border-gray-300"
                  } border border-solid focus:outline-purple-300 px-2`}
                  type="text"
                  name="postCode"
                  onChange={(e) => handleBillToChange(e)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full mt-3">
              <label className="text-gray-400 text-sm" htmlFor="street-address">
                Country
              </label>
              <input
                className={`rounded-md h-9 ${
                  darkMode
                    ? "bg-[#1e2139] border-[#1e2139]"
                    : "bg-white border-gray-300"
                } border border-solid focus:outline-purple-300 px-2`}
                type="text"
                name="country"
                onChange={(e) => handleBillToChange(e)}
              />
            </div>
          </div>
          <div className="flex justify-between gap-5 mt-3">
            <div className="flex flex-col gap-1 flex-grow">
              <label className="text-gray-400 text-sm" htmlFor="street-address">
                Invoice Date
              </label>
              <input
                className={`rounded-md h-9 ${
                  darkMode
                    ? "bg-[#1e2139] border-[#1e2139]"
                    : "bg-white border-gray-300"
                } border border-solid focus:outline-purple-300 px-2`}
                type="date"
                name="invoiceDate"
                onChange={(e) => handleBillToChange(e)}
              />
            </div>
            <div className="flex flex-col gap-1 flex-grow">
              <label className="text-gray-400 text-sm" htmlFor="street-address">
                Invoice Date
              </label>
              <input
                className={`rounded-md h-9 ${
                  darkMode
                    ? "bg-[#1e2139] border-[#1e2139]"
                    : "bg-white border-gray-300"
                } border border-solid focus:outline-purple-300 px-2`}
                type="date"
                name="invoice-date"
              />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex flex-col gap-1 flex-grow">
              <label className="text-gray-400 text-sm" htmlFor="street-address">
                Description
              </label>
              <input
                className={`rounded-md h-9 ${
                  darkMode
                    ? "bg-[#1e2139] border-[#1e2139]"
                    : "bg-white border-gray-300"
                } border border-solid focus:outline-purple-300 px-2`}
                type="text"
                name="description"
                onChange={(e) => handleBillToChange(e)}
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <h1 className="text-gray-500 font-semibold text-[20px]">
              Item List
            </h1>
            <div>
              {items.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="flex justify-between items-center gap-2 flex-wrap ">
                    <div className="flex flex-col gap-1 mt-2">
                      <label
                        className="text-gray-400 text-sm"
                        htmlFor="street-address"
                      >
                        Item Name
                      </label>
                      <input
                        type="text"
                        value={item.itemName}
                        className={`rounded-md h-9 ${
                          darkMode
                            ? "bg-[#1e2139] border-[#1e2139]"
                            : "bg-white border-gray-300"
                        } border border-solid focus:outline-purple-300 px-2`}
                        onChange={(e) =>
                          handleInputChange(item.id, "itemName", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <label
                        className="text-gray-400 text-sm"
                        htmlFor="street-address"
                      >
                        Qty.
                      </label>
                      <input
                        type="text"
                        value={item.quantity}
                        className={`rounded-md h-9 w-[50px] ${
                          darkMode
                            ? "bg-[#1e2139] border-[#1e2139]"
                            : "bg-white border-gray-300"
                        } border border-solid focus:outline-purple-300 px-2`}
                        onChange={(e) =>
                          handleInputChange(item.id, "quantity", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <label
                        className="text-gray-400 text-sm"
                        htmlFor="street-address"
                      >
                        Price
                      </label>
                      <input
                        type="text"
                        value={item.price}
                        className={`rounded-md h-9 w-[100px] ${
                          darkMode
                            ? "bg-[#1e2139] border-[#1e2139]"
                            : "bg-white border-gray-300"
                        } border border-solid focus:outline-purple-300 px-2`}
                        onChange={(e) =>
                          handleInputChange(item.id, "price", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <label
                        className="text-gray-400 text-sm"
                        htmlFor="street-address"
                      >
                        Total
                      </label>
                      <input
                        type="text"
                        value={item.quantity * item.price}
                        className={`rounded-md h-9 w-[70px] ${
                          darkMode
                            ? "bg-[#1e2139] border-[#1e2139]"
                            : "bg-white border-gray-300"
                        } border border-solid focus:outline-purple-300 px-2`}
                      />
                    </div>
                    <div>
                      <BiSolidTrash
                        onClick={() => handleDeleteItem(item.id)}
                        className="mt-8 flex-grow cursor-pointer hover:text-red-500 text-gray-400"
                        size={25}
                      />
                    </div>
                  </div>

                  <div
                    className={`h-[1px] ${
                      darkMode ? "bg-white" : "bg-gray-200"
                    } w-full my-4`}
                  ></div>
                </div>
              ))}
              <button
                className="w-full outline-none mt-3"
                onClick={handleAddItem}
              >
                <div
                  className={`${
                    darkMode ? "bg-[#21253e]" : "bg-[#eaebee]"
                  } cursor-pointer rounded-lg w-full h-[35px] p-2 flex justify-center items-center gap-2`}
                >
                  <BiPlus />
                  <span className="text-sm cursor-pointer">Add New Item</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Body End */}
        {/* Footer */}
        <div className="h-[200px] flex justify-between items-center mt-5">
          <button
            onClick={handleDiscardFunction}
            className={`${
              darkMode ? "bg-[#21253e]" : "bg-[#eaebee]"
            } px-6 py-2 rounded-full`}
          >
            Discard
          </button>
          <button
            onClick={handleSaveInvoice}
            className="bg-[#896efa] px-6 py-2 rounded-full text-white"
          >
            Save & Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
