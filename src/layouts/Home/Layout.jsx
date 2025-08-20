import { Outlet } from "react-router";
import Header from "./Header";

export default function HomeLayout() {
  return (
    <div>
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
