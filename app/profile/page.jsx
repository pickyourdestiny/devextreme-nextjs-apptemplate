import "./profile.scss";
import dynamic from "next/dynamic";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const UserProfile = dynamic(
  () => import("../components/userProfile/userProfile"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Profile Page",
  description: "Profile page of my awesome Web App",
};

export default async function Profile() {
  //protect your pages with NextAuth as this server code never reaches the client
  //if you have a database or excel file of authorized users, you can check if session.user.email exists
  //in those records (via another api call) in another if statement below

  // const session = await getServerSession();

  // if (!session) {
  //   redirect("/home");
  // }

  return (
    <div className="mt-4">
      <UserProfile />
    </div>
  );
}
