import { usersResource } from "@/app/users/resources/users";
import Image from "next/image";
import { User } from "@/types";

export default async function UserDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const user: User = await usersResource.load(id);
  const {location}=user
  return (
    <div className="container w-full md:w-2/3 lg:w-1/2 mx-auto mt-8 p-4 rounded-lg shadow-xl">
      <div className="flex flex-col items-center sm:flex-row mb-4">
        <Image src={user.picture} alt="" width="300" height="300" />
        <div className="w-full sm:w-2/3 px-8 text-gray-800">
          <h2 className="text-xl text-truncate mb-4">
            <b>
              {user.title}. {user.firstName} {user.lastName}
            </b>
          </h2>
          <div className="flex flex-col sm:w-2/3 w-full w-justify-between">
            <p
              className="font-hairline text-sm text-gray-500 truncate mb-4"
              title={user.email}
            >
              email: {user.email}
            </p>
            <p className="flex flex-col">
              <span className="text-gray-500">{location.street}  {location.city}</span>
              <span>{location.country}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
