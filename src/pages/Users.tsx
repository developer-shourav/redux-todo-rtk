import { AddUserModal } from "@/components/module/users/AddUserModal";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";
import UserCard from "@/components/module/users/UserCard";
export default function Users() {
  const users = useAppSelector(selectUsers);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-10">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto text-2xl font-medium">Users</h1>
        <AddUserModal />
      </div>
      <div className="grid grid-cols-4 gap-x-4 gap-y-5 mt-5">
        {/* --------User Will Display Here----------- */}
        {users.map((user) => (
          <UserCard key={user?.id} userInfo={user} />
        ))}
      </div>
    </div>
  );
}
