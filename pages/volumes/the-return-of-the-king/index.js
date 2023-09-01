import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Fellowship() {
  const bookThree = volumes.find(({ slug }) => slug === "the-two-towers");
  console.log("Titel from data.js", bookThree);
  return (
    <div>
      <Link href="../volumes">All Volumes</Link>
      <h1>{bookThree.title}</h1>
      <p>{bookThree.description}</p>
      <ul>
        <li>
          {bookThree.books[0].ordinal}: {bookThree.books[0].title}
        </li>
        <li>
          {bookThree.books[1].ordinal}: {bookThree.books[1].title}
        </li>
      </ul>
      <Image
        src={bookThree.cover}
        alt={bookThree.title}
        width={140}
        height={230}
      />
      <Link href="../volumes/the-two-towers">Previous Volume</Link>
    </div>
  );
}
