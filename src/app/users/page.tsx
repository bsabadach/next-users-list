import Hydrate from "@/common/Hydrate-client";
import getQueryClient from "@/common/queryClient";
import { dehydrate } from "@tanstack/react-query";
import { usersResource } from "@/app/users/resources/users";
import { UsersList } from "@/app/users/components/UsersList";

export default async function UsersListPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["users"], usersResource.list);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <UsersList />
    </Hydrate>
  );
}
