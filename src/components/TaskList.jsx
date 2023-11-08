import { observer } from "mobx-react-lite";

const TaskList = observer(() => {
  const { taskStore } = useStore()

  return (
    <div>
      <div className="flex flex-col sm:flew-row gap-4 sm:items-center sm:justify-between mb-8 sm:mb-14">
        <h2 className="text-2xl font-semibold">
          All The{" "}
          {}
        </h2>
      </div>
    </div>
  );
});

export default TaskList;
