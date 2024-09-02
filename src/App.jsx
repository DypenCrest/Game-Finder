import Card from "./components/Card.jsx";
import Navbar from "./components/Navbar.jsx";
import cardData from "./components/Data.js";
import { useState } from "react";
export default function App() {
  const [searchValue, setsearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(cardData || []);

  const filterDataHandler = (words) => {
    let arr = cardData.filter((item) =>
      item.name.toLowerCase().includes(words.toLowerCase())
    );
    setFilteredData(arr);
  };
  return (
    <>
      <Navbar />

      {/* cards */}
      <form class="max-w-md mx-auto my-10">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            class="block w-full p-4 ps-10 text-sm text-zinc-200 focus:border rounded-lg bg-zinc-800 focus:outline-none"
            placeholder="Search Games"
            onChange={(e) => filterDataHandler(e.target.value)}
          />
        </div>
      </form>
      <div className="flex justify-center flex-wrap">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => <Card key={index} data={item} />)
        ) : (
          <h1>No Games Found.</h1>
        )}
      </div>
    </>
  );
}


// modal