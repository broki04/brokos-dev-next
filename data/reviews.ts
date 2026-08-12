export type Testimonial = {
  id: number;
  name: string;
  role: string;
  text: string;
  stars: number;
  avatar: string;
};

export const REVIEWS: Testimonial[] = [
  {
    id: 1,
    name: "Jan Kowalski",
    role: "Właściciel firmy",
    text: "Świetna współpraca, szybka realizacja i bardzo dobry kontakt. Strona działa płynnie i wygląda profesjonalnie.",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Anna Nowak",
    role: "Project Manager",
    text: "Mateusz szybko zrozumiał nasze potrzeby i dostarczył projekt dokładnie tak, jak oczekiwaliśmy. Bardzo polecam współpracę!",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 3,
    name: "Piotr Wiśniewski",
    role: "CEO Startupu",
    text: "Profesjonalne podejście i terminowość. Kilka poprawek w trakcie projektu zostało wykonanych bez problemu.",
    stars: 4,
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 4,
    name: "Katarzyna Zielińska",
    role: "Freelancerka",
    text: "Bardzo dobry kontakt i elastyczność. Projekt został dopracowany w każdym szczególe.",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 5,
    name: "Michał Malinowski",
    role: "Lead Developer",
    text: "Kod był czytelny i dobrze udokumentowany, łatwo było go integrować z naszym projektem.",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 6,
    name: "Joanna Kaczmarek",
    role: "UX Designer",
    text: "Doskonałe zrozumienie wymagań i szybkie reagowanie na sugestie. Polecam każdemu!",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 7,
    name: "Tomasz Wójcik",
    role: "CEO małej firmy",
    text: "Profesjonalizm i terminowość – projekt dostarczony przed czasem, bez problemów.",
    stars: 4,
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    id: 8,
    name: "Monika Szymańska",
    role: "Marketing Manager",
    text: "Bardzo dobra współpraca, wszystkie zmiany były wprowadzane od ręki.",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    id: 9,
    name: "Adam Lewandowski",
    role: "Entrepreneur",
    text: "Polecam! Każdy etap projektu był przemyślany i profesjonalnie wykonany.",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    id: 10,
    name: "Ewa Piotrowska",
    role: "HR Specialist",
    text: "Kontakt był szybki i przyjemny, a projekt został dopracowany w każdym szczególe.",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];
