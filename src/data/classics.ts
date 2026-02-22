export interface ClassicVideo {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  year?: string;
}

export const classics: ClassicVideo[] = [
  {
    id: "1",
    title: "Ta mig till Casa",
    description: "The legendary Hanken classic that every student knows by heart. A beloved tradition at student events.",
    youtubeUrl: "https://www.youtube.com/watch?v=a_EgrRkbcoI",
    thumbnailUrl: "https://img.youtube.com/vi/a_EgrRkbcoI/hqdefault.jpg",
    year: "Classic",
  },
  {
    id: "2",
    title: "Hanken – TF 1972",
    description: "A historic look at Hanken's Teknologföreningen from 1972. A timeless piece of Hanken history.",
    youtubeUrl: "https://www.youtube.com/watch?v=NkyEGc8HYQs",
    thumbnailUrl: "https://img.youtube.com/vi/NkyEGc8HYQs/hqdefault.jpg",
    year: "1972",
  },
  {
    id: "3",
    title: "Sven Dufva",
    description: "The beloved Sven Dufva – a Finnish cultural classic often performed at Hanken gatherings.",
    youtubeUrl: "https://www.youtube.com/watch?v=CbYP9VWHYe8",
    thumbnailUrl: "https://img.youtube.com/vi/CbYP9VWHYe8/hqdefault.jpg",
    year: "Classic",
  },
  {
    id: "4",
    title: "Hanken Gulnäbb 2019",
    description: "The freshman initiation ceremony – a rite of passage for every new Hanken student.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    year: "2019",
  },
  {
    id: "5",
    title: "Hanken 100 Years Gala",
    description: "Highlights from the centennial celebration of Hanken School of Economics.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    year: "2009",
  },
];
