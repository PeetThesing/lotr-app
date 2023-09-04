import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import { useRouter } from "next/router";

export default function HomePage() {
  function getRandomVolume(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const router = useRouter();

  function handleClick() {
    const randomSlug = getRandomVolume(volumes).slug;
    router.push(`volumes/${randomSlug}`);
    console.log("Random Volume Function", randomSlug);
  }

  return (
    <>
      <h1>All Volumes</h1>
      <ul>
        {volumes.map(({ slug, title }) => {
          return (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={handleClick}>
        Get random volume
      </button>
    </>
  );
}
