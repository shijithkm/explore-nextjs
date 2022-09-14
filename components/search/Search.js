import Image from "next/image";
import CloseIcon from "../../public/icons/close.svg";
import { useState, useCallback } from "react";
import SearchResults from "./SearchResults";

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setQuery("");
    setData([]);
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (value) => {
    setData([]);
    setLoading(true);
    setQuery(value);

    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      // .then((data) => {
      //   return data.find(({ name }) => name != value);
      // })
      .then((data) => {
        console.log(data);
        data === undefined ? setData([]) : setData(data);
        setLoading(false);
      });
  };

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <section className="bg-white-100 text-gray-600 h-screen p-4">
      <div className="py-4 mx-auto">
        <span className="text-sm text-center block p-4 text-zinc-400">
          Showing results for
        </span>
        <div className="flex">
          <input
            type="text"
            id="voice-search"
            className="border-b-2 text-gray-700 text-2xl font-bold text-center block w-full pl-10 p-2.5 focus:border-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-0 inline"
            placeholder="Search Building Contractors, Design Templates..."
            required
            onChange={(e) => {
              setQuery(e.target.value);
              optimizedFn(e.target.value);
            }}
            value={query}
            autoComplete="off"
          />
          {query.length > 0 && (
            <Image
              onClick={handleClick}
              src={CloseIcon}
              alt="Logo"
              className="h-6 inline text-gray-700 cursor-pointer"
              width={50}
              height={50}
            />
          )}
        </div>
      </div>
      {isLoading && <h1>Loading ...</h1>}
      {query.length > 0 && isLoading == false && data.length == 0 && (
        <h1>No Results Found!</h1>
      )}
      <SearchResults data={data} />
    </section>
  );
}
export default Search;
