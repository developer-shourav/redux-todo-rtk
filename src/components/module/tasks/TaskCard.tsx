import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";

export default function TaskCard({ taskInfo }: { taskInfo: ITask }) {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const assignedUser = users.find((user) => user.id === taskInfo.assignedTo);
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full bg-green-500", {
              "bg-red-500": taskInfo.priority === "high",
              "bg-orange-500": taskInfo.priority === "medium",
              "bg-green-500": taskInfo.priority === "low",
            })}
          ></div>
          <h1 className={cn({ "line-through": taskInfo.isCompleted })}>
            {taskInfo.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteTask(taskInfo.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
          <Checkbox
            checked={taskInfo.isCompleted}
            onClick={() => dispatch(toggleCompleteState(taskInfo.id))}
          />
        </div>
      </div>
      <p>Assigned To- {assignedUser ? assignedUser?.userName : 'No one'}</p>
      <p className="mt-3">{taskInfo.description}</p>
    </div>
  );
}
