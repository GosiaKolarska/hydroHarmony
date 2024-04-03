import React from "react";
import { Link } from "@remix-run/react";

const Sidebar = () => {
  return (
    <div className="w-1/4">
      <ul className="list-none p-4">
        <li>
          <Link to="/01-location" className="text-blue-500 font-semibold">
            Lokalizacja
          </Link>
        </li>
        <li>
          <Link to="/02-requirement">Zapotrzebowanie</Link>
        </li>
        <li>
          <Link to="/03-plan">Plan</Link>
        </li>
        <li>
          <Link to="/04-method">Sposób dostarczeania</Link>
        </li>
        <li>
          <Link to="/05-collection">Miejsce poboru</Link>
        </li>
        <li>
          <Link to="/06-result">Result</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
