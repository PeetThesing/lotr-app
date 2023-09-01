import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Fellowship() {
  const bookTwo = volumes.find(({ slug }) => slug === "the-two-towers");
  console.log("Titel from data.js", bookTwo);
  return (
    <div>
      <Link href="../volumes">All Volumes</Link>
      <h1>{bookTwo.title}</h1>
      <p>{bookTwo.description}</p>
      <ul>
        <li>
          {bookTwo.books[0].ordinal}: {bookTwo.books[0].title}
        </li>
        <li>
          {bookTwo.books[1].ordinal}: {bookTwo.books[1].title}
        </li>
      </ul>
      <Image src={bookTwo.cover} alt={bookTwo.title} width={140} height={230} />
      <Link href="../volumes/the-fellowship-of-the-ring">Previous Volume</Link>
      <p> </p>
      <Link href="../volumes/the-return-of-the-king">Next Volume</Link>
    </div>
  );
}
