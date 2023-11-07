import TaskList from "@/components/TaskList";

const Home = async ({}) => {
  return (
    <main className="flex min-h-screen justify-between p-24">
      <h1 className="text-2xl">Welcome to Task Manager</h1>

      <div className="grid place-items-center">
        <TaskList />
      </div>
    </main>
  );
};

export default Home;
