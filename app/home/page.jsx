import "./home.scss";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("../components/home/homePage"), {
  ssr: false,
});

export const metadata = {
  title: "Home Page",
  description: "Home page of my awesome Web App",
};

export default async function Home() {
  return (
    <div className="mt-4">
      <HomePage />
    </div>
  );
}
