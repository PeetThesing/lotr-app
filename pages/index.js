import { introduction, volumes } from "../resources/lib/data";
import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      {introduction}
      <Link href="/volumes">
        <h2>All Volumes</h2>
      </Link>
    </div>
  );
}
