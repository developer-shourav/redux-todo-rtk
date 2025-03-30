import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      {" "}
      <div className="flex items-center mr-10">
        <img src={Logo} alt="logo" className="w-8 h-8" />
        <span className="font-bold ml-2">Task Manazer</span>
      </div>
      <Link to="/">Tasks</Link>
      <Link to="/users">Users</Link>
      <div className="ml-auto">
        <ModeToggle/>
      </div>
    </nav>
  );
}
