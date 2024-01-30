import React from "react";
import LineChart from "./components/LineChart";
import data from "./data/MOCKDATA.json";

// passing the data as a prop to the child component
// styling from the tailwind docs
function App() {
  return (
    <div className="h-screen w-screen bg-slate-200 flex justify-center items-center p-8 min-w-[800px]">
      <LineChart data={data} />
    </div>
  );
}

export default App;
