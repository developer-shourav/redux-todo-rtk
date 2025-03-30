// import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { ITask } from "@/types";

export default function Tasks() {
  const { data, isError, isLoading } = useGetTasksQuery(undefined);

  const tasks  = data?.tasks;

  return (
    <div className="mx-auto max-w-7xl px-5 mt-10">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto text-2xl font-medium">Tasks</h1>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="low">Low</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>
        {/*         <AddTaskModal /> */}
      </div>
      <div className="space-y-5 mt-5">
        {isLoading && <div>Loading....</div>}
        {!isError &&
          !isLoading &&
          tasks.map((task: ITask) => (
            <TaskCard key={task?.id} taskInfo={task} />
          ))}
      </div>
    </div>
  );
}
