import Image from "next/image";
import CloseIcon from "../../public/icons/close.svg";
import { useState, useEffect, useCallback } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setQuery("");
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
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => {
        return [data.find(({ name }) => name == value)];
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  };

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <section className="bg-white-100 text-gray-600 h-screen p-4">
      <div className="py-4 mx-auto">
        <span className="text-sm text-center block p-4 text-zinc-400">
          Showing results for {query}
        </span>
        <div className="flex">
          <input
            type="text"
            id="voice-search"
            className="border-b-2 text-gray-700 text-2xl font-bold text-center block w-full pl-10 p-2.5 focus:border-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-0 inline"
            placeholder="Search Building Contractors, Design Templates..."
            required
            onChange={(e) => optimizedFn(e.target.value)}
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

      {data && data.length > 0 && (
        <div className="w-full mb-5 mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <div className="flex flex-col justify-center h-full ">
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Phone</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Website</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {data.map((professional) => (
                      <tr key={professional?.id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <Image
                                className="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                width="40"
                                height="40"
                                alt="Alex Shatov"
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              {professional?.name}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{professional?.email}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            {professional?.phone}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-center">
                            {" "}
                            {professional?.website}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default Search;
