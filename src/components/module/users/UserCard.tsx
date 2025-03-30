import { Button } from "@/components/ui/button";
import { deleteUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";
import { Trash2 } from "lucide-react";

export default function UserCard({ userInfo }: { userInfo: IUser }) {
  const dispatch = useAppDispatch();
  return (
    <div className="border border-blue-800 px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1 className="text-lg">{userInfo.userName}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteUser(userInfo.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
        </div>
      </div>
      <p className="mt-2">{userInfo.userEmail}</p>
    </div>
  );
}
