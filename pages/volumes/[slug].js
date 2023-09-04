import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentIndex = volumes.findIndex((volume) => volume.slug === slug);
  const nextVolume = volumes[currentIndex + 1];
  const previousVolume = volumes[currentIndex - 1];
  const currentVolume = volumes.find((volume) => volume.slug === slug);
  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books } = currentVolume;

  return (
    <div>
      <div>
        <Link href={`/volumes/`}>⬅️All Volumes</Link>
      </div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        <li>
          {books[0].ordinal}: {books[0].title}
        </li>
        <li>
          {books[1].ordinal}: {books[1].title}
        </li>
      </ul>
      <Image src={cover} alt={title} width={140} height={230} />
      {previousVolume && (
        <Link href={`/volumes/${previousVolume.slug}`}>Previous Volume</Link>
      )}{" "}
      {nextVolume && (
        <Link href={`/volumes/${nextVolume.slug}`}>Next Volume</Link>
      )}
    </div>
  );
}
