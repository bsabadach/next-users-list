import * as React from "react";
import Link from "next/link";

import { SimpleUser } from "@/types";

type Props = {
  user: SimpleUser;
  onSelectUser: (selectedUserId: string) => void;
};

export const UserCard = ({ user, onSelectUser }: Props) => {
  return (
    <Link href={`/users/${user.id}`} className="w-full md:w-1/3 lg:w-1/5">
      <div className="flex flex-col mb-8 px-3">
        <div className="overflow-hidden bg-white object-cover rounded-lg shadow-xl hover:shadow-raised transform transition duration-200 hover:-translate-y-2">
          <img
            className="w-full"
            src={user.picture}
            alt={user.firstName + " " + user.lastName}
          />

          <div className="p-6 flex flex-col justify-between">
            <p className="font-medium text-gray-900 leading-normal mb-2">
              {user.firstName} {user.lastName}
            </p>
            <p
              className="font-hairline text-sm text-gray-500 mb-4"
              title={user.email}
            >
              {user.email}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
