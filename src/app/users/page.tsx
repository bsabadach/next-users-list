import { usersResource } from "@/app/users/resources/users";
import { UsersList } from "@/app/users/components/UsersList";

export default async function UsersListPage() {
  const users = await usersResource.list();
  const onSelectUser = (id: string) => {
    console.log(id);
  };
  return (
    <section className="p-8">
      <UsersList users={users} onSelectUser={onSelectUser} />
    </section>
  );
}
