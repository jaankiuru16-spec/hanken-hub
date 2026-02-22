export interface HankenEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: "hanken" | "shs" | "club";
  organizer: string;
}

export const events: HankenEvent[] = [
  {
    id: "1",
    title: "Hanken Open Day 2026",
    date: "2026-03-05",
    time: "10:00 - 15:00",
    location: "Hanken Helsinki Campus",
    description: "Discover what Hanken has to offer! Meet students, faculty, and explore our programs.",
    category: "hanken",
    organizer: "Hanken",
  },
  {
    id: "2",
    title: "Finance Guest Lecture: Nordic Markets",
    date: "2026-03-10",
    time: "14:00 - 16:00",
    location: "Room 301, Arkadiankatu 22",
    description: "A guest lecture on Nordic financial markets with Dr. Erik Lindqvist from Nordea.",
    category: "hanken",
    organizer: "Hanken Finance Dept.",
  },
  {
    id: "3",
    title: "SHS Annual Ball",
    date: "2026-03-14",
    time: "18:00 - 02:00",
    location: "Börshusets Festsal",
    description: "The annual gala by the Student Union. Dress code: formal. Tickets available at SHS office.",
    category: "shs",
    organizer: "SHS",
  },
  {
    id: "4",
    title: "SHS Board Game Night",
    date: "2026-02-28",
    time: "17:00 - 21:00",
    location: "Student Lounge",
    description: "Join us for a relaxed evening of board games, snacks, and good company!",
    category: "shs",
    organizer: "SHS",
  },
  {
    id: "5",
    title: "Marketing Club Workshop",
    date: "2026-03-02",
    time: "16:00 - 18:00",
    location: "Room 205, Helsinki Campus",
    description: "Learn about brand strategy and digital marketing trends in this hands-on workshop.",
    category: "club",
    organizer: "Marketing Club",
  },
  {
    id: "6",
    title: "Investment Club: Stock Pitch Competition",
    date: "2026-03-08",
    time: "13:00 - 17:00",
    location: "Auditorium, Arkadiankatu 22",
    description: "Present your best stock pitch to a panel of industry professionals. Prizes for top 3!",
    category: "club",
    organizer: "Investment Club",
  },
  {
    id: "7",
    title: "Entrepreneurship Society Meetup",
    date: "2026-03-12",
    time: "17:30 - 19:30",
    location: "Maria 01, Helsinki",
    description: "Network with founders and hear startup stories from Hanken alumni entrepreneurs.",
    category: "club",
    organizer: "Entrepreneurship Society",
  },
  {
    id: "8",
    title: "Career Fair Spring 2026",
    date: "2026-03-18",
    time: "10:00 - 16:00",
    location: "Hanken Helsinki Campus",
    description: "Meet top employers from finance, consulting, tech and more. Bring your CV!",
    category: "hanken",
    organizer: "Hanken Career Services",
  },
  {
    id: "9",
    title: "SHS Sitz Party",
    date: "2026-03-07",
    time: "18:00 - 23:00",
    location: "Old Student House",
    description: "Traditional academic dinner party with songs, speeches and great food. Sign up required.",
    category: "shs",
    organizer: "SHS",
  },
  {
    id: "10",
    title: "Tech Club: AI in Finance Panel",
    date: "2026-03-15",
    time: "15:00 - 17:00",
    location: "Room 401, Helsinki Campus",
    description: "Panel discussion on artificial intelligence applications in modern finance.",
    category: "club",
    organizer: "Tech Club",
  },
];
