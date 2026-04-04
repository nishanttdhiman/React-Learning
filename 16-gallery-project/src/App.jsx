import React, { use, useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`,
    );
    setUserData(response.data);
    console.log(response);
    console.log("data aagea");
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );
  let printUserData = "No user Data available";
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div>
          <a href={elem.url}>
            <div className="h-40 w-44 bg-white">
              <img
                className="h-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2>{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen overflow-auto text-white">
      <h1>{index}</h1>
      <button
        onClick={getData}
        // style={{ opacity: index == 1 ? 0.6 : 1 }}
        //className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
      ></button>

      <div className="flex flex-wrap gap-4">{printUserData}</div>

      <div className="flex justify-center gap-6 items-center p-4">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
        >
          Prev
        </button>
        <button
          onClick={() => {
            setIndex(index + 1);
          }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
