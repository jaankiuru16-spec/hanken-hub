export interface Job {
  id: string;
  title: string;
  company: string;
  type: "full-time" | "part-time" | "club" | "school" | "research";
  location: string;
  description: string;
  postedDate: string;
  applyUrl?: string;
}

export const jobs: Job[] = [
  { id: "1", title: "Junior Analyst", company: "Nordea", type: "full-time", location: "Helsinki", description: "Join Nordea's Corporate Banking team as a Junior Analyst. Ideal for recent graduates.", postedDate: "2026-02-18" },
  { id: "2", title: "Marketing Intern", company: "Fazer", type: "part-time", location: "Helsinki", description: "Part-time marketing role with flexible hours. Perfect for students.", postedDate: "2026-02-20" },
  { id: "3", title: "Board Member", company: "SHS Marketing Club", type: "club", location: "Helsinki", description: "Join the SHS Marketing Club board. Help organize events and workshops.", postedDate: "2026-02-15" },
  { id: "4", title: "Research Assistant – Finance", company: "Hanken School of Economics", type: "research", location: "Helsinki", description: "Assist Prof. Lindqvist with research on sustainable finance. 10-15 hrs/week.", postedDate: "2026-02-19" },
  { id: "5", title: "Teaching Assistant – Accounting", company: "Hanken School of Economics", type: "school", location: "Helsinki", description: "TA position for the Intermediate Accounting course. Spring term 2026.", postedDate: "2026-02-17" },
  { id: "6", title: "Summer Associate", company: "McKinsey & Company", type: "full-time", location: "Stockholm", description: "10-week summer program for MBA and MSc students. Apply by March 15.", postedDate: "2026-02-10" },
  { id: "7", title: "Data Analyst (Part-time)", company: "Supercell", type: "part-time", location: "Helsinki", description: "Work with game analytics data. Python and SQL skills required. 20hrs/week.", postedDate: "2026-02-21" },
  { id: "8", title: "Event Coordinator", company: "SHS Student Union", type: "club", location: "Helsinki", description: "Coordinate student events for SHS. Great experience in event management.", postedDate: "2026-02-14" },
  { id: "9", title: "Research Intern – Behavioral Economics", company: "Hanken School of Economics", type: "research", location: "Vaasa", description: "Support ongoing research in behavioral economics and decision-making.", postedDate: "2026-02-12" },
  { id: "10", title: "Wealth Management Trainee", company: "UBS", type: "full-time", location: "Zurich", description: "Graduate trainee program in private wealth management. Starts September 2026.", postedDate: "2026-02-08" },
];
