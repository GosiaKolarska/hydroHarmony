import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "HydroHarmony" },
    { name: "description", content: "Welcome to HydroHarmony!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to HydroHarmony</h1>
      <ul>
        <li>
          <Link to="/01-location">Start the Calculator</Link>
        </li>
      </ul>
    </div>
  );
}