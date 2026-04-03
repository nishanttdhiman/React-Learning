import React, { useState } from "react";
import { X, XIcon } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault(); // this stops auto reloading of form after submitting

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
    console.log(idx);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start "
      >
        <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded "
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* DETAILED VALA INPUT  */}
        <textarea
          type="text"
          className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded "
          placeholder="Write Details here"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2  p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-full overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className=" relative h-52 w-40 rounded-xl text-black p-4 bg-white"
              >
                <h2
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="absolute top-5 right-5 cursor-pointer active:scale-120 "
                >
                  <X />
                </h2>
                <h3 className="leading-tight font-bold text-xl">
                  {elem.title}
                </h3>
                <p className="mt-4 leading-tight font-medium">{elem.details}</p>
              </div>
            );
          })}
        </div>
        {/* <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div> */}
      </div>
    </div>
  );
};

export default App;
