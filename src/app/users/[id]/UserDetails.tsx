import { User } from "@/types";
import Image from "next/image";

export default function UserDetails({ user }: { user: User }) {
  const { location } = user;
  return (
    <div className="container w-full md:w-2/3 lg:w-1/2 mx-auto mt-8 p-4 rounded-lg shadow-xl">
      <div className="flex flex-col items-center sm:flex-row mb-4">
        <Image src={user.picture} alt="" width="300" height="300" />
        <div className="w-full flex flex-col items-start sm:w-2/3 px-8 text-gray-800">
          <h2 className="text-xl text-truncate mb-4">
            <b>
              {user.title}. {user.firstName} {user.lastName}
            </b>
          </h2>
          <div className="flex flex-col sm:w-2/3 md:w-full">
            <span
              className="font-hairline text-sm text-gray-500 mb-2"
              title={user.email}
            >
              {user.email}
            </span>
            <p className="flex flex-col">
              <span className="text-gray-500">
                {location.street} {location.city}
              </span>
              <span>{location.country}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
