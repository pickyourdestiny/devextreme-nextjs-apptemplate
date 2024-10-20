import "./tasks.scss";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Tasks Page",
  description: "Tasks page of my awesome Web App",
};

const TaskList = dynamic(() => import("../components/taskList/taskList"), {
  ssr: false,
});

export default async function Tasks() {
  //protect your pages with NextAuth as this server code never reaches the client
  //if you have a database or excel file of authorized users, you can check if session.user.email exists
  //in those records (via another api call) in another if statement below

  // const session = await getServerSession();

  // if (!session) {
  //   redirect("/home");
  // }

  return (
    <>
      <TaskList />
    </>
  );
}
