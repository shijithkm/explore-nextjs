import Image from "next/image";
import Location from "../../public/icons/location.svg";
import Rating from "react-rating";
import EmptyStar from "../../public/icons/empty-star.svg";
import FullStar from "../../public/icons/full-star.svg";

export default function SearchResults({ data }) {
  console.log(data);

  return (
    data &&
    data.length > 0 && (
      <div className="w-full mb-5 mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <div className="flex flex-col justify-center h-full ">
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <tbody className="text-sm divide-y divide-gray-100">
                  {data.map((professional) => (
                    <tr key={professional?.id} className="bg-zinc-100">
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <Image
                              className="rounded-full bg-zinc-400"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold">{professional?.name}</h3>
                            <h5 className="text-zinc-400">
                              Builing Contractor
                            </h5>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <Image
                            alt="Location Icon"
                            width="40px"
                            height="40px"
                            src={Location}
                          />
                          <h3 className="text-left inline-block font-bold">
                            {professional?.email}
                          </h3>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <Image
                            alt="Location Icon"
                            width="40px"
                            height="40px"
                            src={Location}
                          />
                          <h3 className="text-left inline-block font-bold">
                            5 Years
                          </h3>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <Rating
                            initialRating={3}
                            readonly
                            emptySymbol={
                              <Image
                                src={EmptyStar}
                                className="icon"
                                width="25px"
                                height="25px"
                              />
                            }
                            placeholderSymbol={
                              <Image
                                src={FullStar}
                                className="icon"
                                width="25px"
                                height="25px"
                              />
                            }
                            fullSymbol={
                              <Image
                                src={FullStar}
                                className="icon"
                                width="25px"
                                height="25px"
                              />
                            }
                          />
                          <h3 className="text-left inline-block text-zinc-400 font-medium">
                            (72)
                          </h3>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <h3 className="text-left inline-block font-bold">
                            1500/sqft
                          </h3>
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
    )
  );
}
