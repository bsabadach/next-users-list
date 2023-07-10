import { usersResource } from "@/app/users/resources/users";
import { User } from "@/types";
import UserDetails from "@/app/users/[id]/UserDetails";

export default async function UserDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const user: User = await usersResource.load(id);
  const { location } = user;
  return <UserDetails user={user} />;
}
