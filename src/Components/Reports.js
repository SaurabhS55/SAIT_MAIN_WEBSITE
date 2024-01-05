import React from "react";
import Data from "../Data/reports";
const Reports = () => {
  return (
    <div className="p-4">
      <h2 className="text-[50px]  font-bold  text-center  text-blue-600 mb-6">
        Annual Reports
      </h2>
      <div className="p-1 space-y-4">
        {Data.map((report, i) => {
          return (
            <div
              key={i}
              className="p-4 rounded-lg bg-gray-800 text-white w-full space-y-2 bg-opacity-40"
            >
              <h1 className="text-lg font-semibold ">{report.title}</h1>
              <div className="flex justify-end">
                <a href={report.pdf} target="_blnak" rel="noreferrer">
                  <button className="w-fit px-4 py-2 bg-blue-400 shadow-md">
                    View
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reports;
