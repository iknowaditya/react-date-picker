import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <>
      <div className=" bg-slate-900  h-screen flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold text-neutral-200 mb-6">
          Select Your Date{" "}
        </h1>
        <div className="App  flex flex-col gap-4 items-center justify-center">
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            dateFormat="dd/MM/yyyy"
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            withPortal
            monthsShown={2}
            isClearable={true}
            placeholderText="Select Date Range"
            className="w-[280px] border border-separate hover:border-gray-400 transition duration-200 rounded-2xl shadow-md p-4"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-neutral-200">
              Selected Date Range
            </h2>
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-green-300">
                Start Date:{" "}
                <span className="text-2xl font-normal text-neutral-200">
                  {startDate ? startDate.toDateString() : "Not Selected"}
                </span>
              </h3>
              <h3 className="text-3xl font-bold text-red-300">
                End Date:{" "}
                <span className="text-2xl font-normal text-neutral-200">
                  {endDate ? endDate.toDateString() : "Not Selected"}
                </span>
              </h3>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                setDateRange([null, null]);
              }}
              className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition duration-200"
            >
              Clear Date Range
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                console.log("Start Date: ", startDate);
                console.log("End Date: ", endDate);
              }}
              className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-200"
            >
              Print Date Range
            </button>
          </div>
          <div className="text-neutral-200 text-sm mt-4">
            <p>
              <strong>Note:</strong> You can select a date range by clicking on
              the start date and then clicking on the end date.
            </p>

            <p>
              <strong>Clear Date Range:</strong> Click on the button to clear
              the selected date range.
            </p>

            <p>
              <strong>Print Date Range:</strong> Click on the button to print
              the selected date range in the console.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
