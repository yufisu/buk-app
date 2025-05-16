import book1984Cover from '../assets/1984.jpg';
import bookcocuklugunsonu from '../assets/cocuklugunsonu.jpeg';
import bookodysseia from '../assets/odysseia.webp';
import bookcesuryenidunya from '../assets/cesuryenidunya.jpeg';
import bookhayvanciftligi from '../assets/hayvanciftligi.jpeg';
import bookdune from '../assets/dune.jpg';
import bookprideandprejudice from '../assets/prideandprejudice.jpg';

// Merkezi kitap veritabanı - sadece kitapların değişmeyen bilgileri
export const books = {
  "1984": {
    id: "1984",
    title: "1984",
    author: "George Orwell",
    coverUrl: book1984Cover,
    publishYear: 1949,
    pageCount: 328,
    description: "Distopik bir gelecekte, totaliter bir rejimin gözetimi altında yaşayan Winston Smith'in hikayesi.",
    genres: ["Distopya", "Bilim Kurgu", "Politik Kurgu"],
    isbn: "978-0451524935"
  },
  "cesur-yeni-dunya": {
    id: "cesur-yeni-dunya",
    title: "Cesur Yeni Dünya",
    author: "Aldous Huxley",
    coverUrl: bookcesuryenidunya,
    publishYear: 1932,
    pageCount: 288,
    description: "Teknolojik ilerlemenin ve toplumsal kontrolün doruk noktasına ulaştığı bir dünyada geçen distopik roman.",
    genres: ["Distopya", "Bilim Kurgu"],
    isbn: "978-9750719266"
  },
  "odysseia": {
    id: "odysseia",
    title: "Odysseia",
    author: "Homeros",
    coverUrl: bookodysseia,
    publishYear: -800,
    pageCount: 541,
    description: "Truva Savaşı'ndan sonra evine dönmeye çalışan Odysseus'un destansı yolculuğu.",
    genres: ["Epik Şiir", "Klasik", "Mitoloji"],
    isbn: "978-9750748387"
  },
  "cocuklugun-sonu": {
    id: "cocuklugun-sonu",
    title: "Çocukluğun Sonu",
    author: "Arthur C. Clarke",
    coverUrl: bookcocuklugunsonu,
    publishYear: 1953,
    pageCount: 304,
    description: "Dünya'nın gizemli uzaylı varlıklar tarafından barışçıl bir şekilde ele geçirilmesini konu alan bilim kurgu klasiği.",
    genres: ["Bilim Kurgu"],
    isbn: "978-9750726415"
  },
  "hayvan-ciftligi": {
    id: "hayvan-ciftligi",
    title: "Hayvan Çiftliği",
    author: "George Orwell",
    coverUrl: bookhayvanciftligi,
    publishYear: 1945,
    pageCount: 152,
    description: "Bir çiftlikteki hayvanların ayaklanmasını alegorik olarak anlatan, totalitarizmi eleştiren roman.",
    genres: ["Politik Kurgu", "Alegori"],
    isbn: "978-9750718649"
  },
  "dune": {
    id: "dune",
    title: "Dune",
    author: "Frank Herbert",
    coverUrl: bookdune,
    publishYear: 1965,
    pageCount: 896,
    description: "Çöl gezegeni Arrakis'te geçen, politik entrikalar, din ve ekolojiyi harmanlayan epik bilim kurgu.",
    genres: ["Bilim Kurgu", "Epik"],
    isbn: "978-0441172719"
  },
  "prideandprejudice": {
    id: "prideandprejudice",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverUrl: bookprideandprejudice,
    publishYear: 1813,
    pageCount: 432,
    description: "19. yüzyıl İngiltere'sinde Elizabeth Bennet ve Mr. Darcy'nin önyargıları aşarak gelişen aşk hikayesi.",
    genres: ["Romantik", "Klasik"],
    isbn: "978-0141439518"
  }
};

// Kullanıcı etkileşimleri - ayrı bir veri yapısı
export const userInteractions = {
  readings: [
    {
      userId: 1,
      bookId: "hayvan-ciftligi",
      dateRead: "2024-03-15",
      rating: 4.5,
      status: "read" // read, reading, want-to-read
    },
    {
      userId: 1,
      bookId: "odysseia",
      dateRead: "2024-03-10",
      rating: 5,
      status: "read"
    },
    {
      userId: 1,
      bookId: "cocuklugun-sonu",
      dateRead: "2024-03-05",
      rating: 4,
      status: "read"
    },
    {
      userId: 1,
      bookId: "cesur-yeni-dunya",
      dateRead: "2024-03-01",
      rating: 4.5,
      status: "read"
    }
  ],
  friendsActivity: [
    {
      userId: 101,
      username: "edoş",
      avatarUrl: "https://via.placeholder.com/40/cc6699/ffffff?text=A",
      bookId: "1984",
      rating: 4.5,
      date: "2024-03-20"
    },
    {
      userId: 102,
      username: "ayşenur",
      avatarUrl: "https://via.placeholder.com/40/3399cc/ffffff?text=Z",
      bookId: "cesur-yeni-dunya",
      rating: 5,
      date: "2024-03-19"
    },
    {
      userId: 103,
      username: "mert",
      avatarUrl: "https://via.placeholder.com/40/cc9933/ffffff?text=M",
      bookId: "odysseia",
      rating: 3.5,
      date: "2024-03-18"
    },
    {
      userId: 104,
      username: "ikra",
      avatarUrl: "https://via.placeholder.com/40/993366/ffffff?text=D",
      bookId: "hayvan-ciftligi",
      rating: 4,
      date: "2024-03-17"
    }
  ]
};

// Görüntüleme fonksiyonları - veriyi birleştirip istenen formatta döndürür
export const getPopularBooks = () => {
  return ["1984", "cesur-yeni-dunya", "odysseia", "cocuklugun-sonu", "hayvan-ciftligi"]
    .map(id => books[id]);
};

export const getRecentBooks = () => {
  return userInteractions.readings
    .sort((a, b) => new Date(b.dateRead) - new Date(a.dateRead))
    .map(reading => ({
      ...books[reading.bookId],
      dateRead: reading.dateRead,
      rating: reading.rating
    }));
};

export const getFriendsBooks = () => {
  return userInteractions.friendsActivity
    .map(activity => ({
      ...books[activity.bookId],
      user: {
        id: activity.userId,
        username: activity.username,
        avatarUrl: activity.avatarUrl,
      },
      userRating: activity.rating
    }));
};

export const getPopularWithFriends = () => {
  return ["cesur-yeni-dunya", "odysseia", "1984", "hayvan-ciftligi"]
    .map(id => books[id]);
};