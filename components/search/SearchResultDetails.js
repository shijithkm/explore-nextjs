import Image from "next/image";
export default function SearchResultDetails({ data }) {
  return (
    <div className="flex flex-row justify-start items-end justify-between p-10">
      <div className="flex flex-col">
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
      <div>
        <h3 className="font-bold">{data.phone}</h3>
      </div>
      <div>
        <h3 className="font-bold">{data.email}</h3>
      </div>
      <div>
        <h3 className="font-bold">{data.website}</h3>
      </div>
    </div>
  );
}
