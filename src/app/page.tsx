import Image from "next/image";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/d33824f7-826b-48bb-b967-29d53b3f0aae-1wh9r.jpg",
  "https://utfs.io/f/52c13ce6-794e-4991-8a3d-e63dbfebc619-b85uyb.jpeg",
  "https://utfs.io/f/14939542-f964-481d-8769-cfa582c7f287-c74q52.jpg",
  "https://utfs.io/f/305665a1-72e8-44ea-a560-0f1b1459d624-htnc3b.webp",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className=" flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className=" w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
