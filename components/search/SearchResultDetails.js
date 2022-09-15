import Image from "next/image";
import Rating from "react-rating";
import EmptyStar from "../../public/icons/empty-star.svg";
import FullStar from "../../public/icons/full-star.svg";

export default function SearchResultDetails({ data }) {
  return (
    <div className="p-10 ">
      <div className="flex flex-row justify-start items-end justify-between border-b-2 py-5">
        <div className="flex flex-col basis-1/4">
          <span>
            <Image
              className="rounded-full bg-zinc-400"
              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
              width="100"
              height="100"
              alt="Alex Shatov"
            />
          </span>
          <h3 className="font-bold">{data.name}</h3>
          <h5 className="text-zinc-400">Building Contractor</h5>
        </div>
        <div className="flex flex-row justify-start basis-1/4">
          <div className="w-6 h-6 rounded-full bg-zinc-200"></div>
          <h3 className="font-bold px-2">{data.phone}</h3>
        </div>
        <div className="flex flex-row justify-start basis-1/4">
          <div className="w-6 h-6 rounded-full bg-zinc-200"></div>
          <h3 className="font-bold px-2">{data.email}</h3>
        </div>
        <div className="flex flex-col justify-start items-start basis-1/4">
          <div className="flex flex-row h-20">
            <a href="#" className="text-orange-600 text-sm px-2">
              Share
            </a>
            <span className="text-orange-600 text-sm">|</span>
            <a href="#" className="text-orange-600 text-sm px-2">
              Shortlist
            </a>
            <div>
              <a
                href="#"
                className="bg-orange-600 rounded-full px-3 py-2 text-white text-sm"
              >
                Book an Appointment
              </a>
            </div>
          </div>
          <div className="flex flex-row justify-items-stretch">
            <div className="w-6 h-6 rounded-full bg-zinc-200"></div>
            <h3 className="font-bold px-2">{data.website}</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-start items-end justify-between border-b-2 py-5">
        <div className="flex flex-col basis-1/4">
          <h3 className="font-bold">Location</h3>
          <h5 className="text-zinc-400">Malappuram</h5>
        </div>
        <div className="flex flex-col basis-1/4">
          <h3 className="font-bold">Experiance</h3>
          <h5 className="text-zinc-400">5 Years</h5>
        </div>
        <div className="flex flex-col basis-1/4">
          <h3 className="font-bold">Rating</h3>
          <div className="flex">
            <h5 className="text-zinc-400">4.5</h5>
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
            <h5 className="text-zinc-400">(73)</h5>
          </div>
        </div>
        <div className="flex flex-col basis-1/4">
          <h3 className="font-bold">Rate</h3>
          <h5 className="text-zinc-400">$1500/ sqft</h5>
        </div>
      </div>
    </div>
  );
}
