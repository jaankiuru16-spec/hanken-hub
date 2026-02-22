export interface Alumni {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  linkedIn?: string;
  phone?: string;
  city: string;
  country: string;
  graduationYear: number;
  currentRole?: string;
  company?: string;
}

export const alumni: Alumni[] = [
  { id: "1", firstName: "Anna", lastName: "Lindström", email: "anna.lindstrom@email.com", linkedIn: "https://linkedin.com/in/annalindstrom", city: "Stockholm", country: "Sweden", graduationYear: 2018, currentRole: "Senior Analyst", company: "McKinsey" },
  { id: "2", firstName: "Erik", lastName: "Virtanen", email: "erik.virtanen@email.com", linkedIn: "https://linkedin.com/in/erikvirtanen", phone: "+358401234567", city: "Helsinki", country: "Finland", graduationYear: 2015, currentRole: "CFO", company: "Wolt" },
  { id: "3", firstName: "Sofia", lastName: "Hansen", email: "sofia.hansen@email.com", linkedIn: "https://linkedin.com/in/sofiahansen", city: "Copenhagen", country: "Denmark", graduationYear: 2020, currentRole: "Investment Banker", company: "Goldman Sachs" },
  { id: "4", firstName: "Lars", lastName: "Bergman", email: "lars.bergman@email.com", city: "London", country: "United Kingdom", graduationYear: 2012, currentRole: "Managing Director", company: "JP Morgan" },
  { id: "5", firstName: "Maria", lastName: "Korhonen", email: "maria.korhonen@email.com", linkedIn: "https://linkedin.com/in/mariakorhonen", city: "New York", country: "United States", graduationYear: 2016, currentRole: "VP Strategy", company: "Google" },
  { id: "6", firstName: "Johan", lastName: "Norberg", email: "johan.norberg@email.com", linkedIn: "https://linkedin.com/in/johannorberg", phone: "+46701234567", city: "Gothenburg", country: "Sweden", graduationYear: 2019, currentRole: "Consultant", company: "BCG" },
  { id: "7", firstName: "Emilia", lastName: "Saarinen", email: "emilia.saarinen@email.com", linkedIn: "https://linkedin.com/in/emiliasaarinen", city: "Singapore", country: "Singapore", graduationYear: 2017, currentRole: "Portfolio Manager", company: "Temasek" },
  { id: "8", firstName: "Niklas", lastName: "Johansson", email: "niklas.johansson@email.com", city: "Zurich", country: "Switzerland", graduationYear: 2014, currentRole: "Risk Manager", company: "UBS" },
  { id: "9", firstName: "Katarina", lastName: "Mäkelä", email: "katarina.makela@email.com", linkedIn: "https://linkedin.com/in/katarinamakela", city: "Berlin", country: "Germany", graduationYear: 2021, currentRole: "Product Manager", company: "Zalando" },
  { id: "10", firstName: "Oscar", lastName: "Lund", email: "oscar.lund@email.com", linkedIn: "https://linkedin.com/in/oscarlund", city: "Helsinki", country: "Finland", graduationYear: 2013, currentRole: "CEO", company: "Supercell" },
  { id: "11", firstName: "Ida", lastName: "Pettersson", email: "ida.pettersson@email.com", city: "Oslo", country: "Norway", graduationYear: 2022, currentRole: "Analyst", company: "DNB" },
  { id: "12", firstName: "Mikael", lastName: "Ahonen", email: "mikael.ahonen@email.com", linkedIn: "https://linkedin.com/in/mikaelahonen", city: "Tokyo", country: "Japan", graduationYear: 2011, currentRole: "Director", company: "Nomura" },
];
