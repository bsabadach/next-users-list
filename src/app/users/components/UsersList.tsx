"use server";

import * as React from "react";
import { UserCard } from "./UserCard";
import { useQuery } from "@tanstack/react-query";
import { usersResource } from "@/app/users/resources/users";

export const UsersList = () => {
  const { data: users, error } = useQuery({
    queryKey: ["users"],
    queryFn: usersResource.list,
  });
  return (
    <section className="m-auto container bg-white relative">
      <div className="flex flex-wrap items-center justify-center">
        {(users ?? []).map((user, index) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </section>
  );
};
