import book1984Cover from '../assets/1984.jpg';
import bookcocuklugunsonu from '../assets/cocuklugunsonu.jpeg';
import bookodysseia from '../assets/odysseia.webp';
import bookcesuryenidunya from '../assets/cesuryenidunya.jpeg';
import bookhayvanciftligi from '../assets/hayvanciftligi.jpeg';
import bookdune from '../assets/dune.jpg';
import bookprideandprejudice from '../assets/prideandprejudice.jpg';
import anonAvatar from '../assets/anon.jpg';
import meAvatar from '../assets/me.JPG';

// Kitaplar - temel veri yapısı
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

// Review'ler için veri yapısı
export const reviews = {
  1: {
    id: 1,
    userId: "edos",
    bookId: "1984",
    rating: 5,
    text: "Distopik kurgu severlerin mutlaka okuması gereken bir başyapıt. Orwell'in totaliter rejim eleştirisi günümüzde bile geçerliliğini koruyor. Özellikle gözetim toplumu ve düşünce kontrolü konusundaki öngörüleri çarpıcı.",
    dateAdded: "2024-03-20"
  },
  2: {
    id: 2,
    userId: "aysenur",
    bookId: "cesur-yeni-dunya",
    rating: 1.5,
    text: "Huxley'nin kurguladığı gelecek vizyonu ilginç olsa da, kitabın anlatımı beni çok sarmadı. Karakterler derinlikten yoksun ve olay örgüsü zaman zaman sıkıcı hale geliyor.",
    dateAdded: "2024-03-19"
  },
  3: {
    id: 3,
    userId: "mert",
    bookId: "odysseia",
    rating: 3.5,
    text: "Homeros'un destansı anlatımı etkileyici, ancak bazı bölümler fazla uzun ve tekrar eden detaylarla dolu. Yine de mitoloji meraklıları için değerli bir eser.",
    dateAdded: "2024-03-18"
  },
  4: {
    id: 4,
    userId: "ikra",
    bookId: "hayvan-ciftligi",
    rating: 4,
    text: "Orwell'in alegorik anlatımı muhteşem. Toplumsal ve politik eleştiriyi bu kadar basit ve etkili bir şekilde aktarması takdire şayan. Kısa ama vurucu bir roman.",
    dateAdded: "2024-03-17"
  },
  5: {
    id: 5,
    userId: "me",
    bookId: "1984",
    rating: 5,
    text: "Orwell'in başyapıtı olan 1984, distopik edebiyatın en önemli eserlerinden biri. Kitap, totaliter bir rejimin birey üzerindeki etkilerini çarpıcı bir şekilde anlatıyor. Özellikle dil ve düşünce kontrolü üzerine olan bölümler çok etkileyici. Winston'ın hikayesi üzerinden anlatılan özgürlük ve bireysellik mücadelesi günümüzde bile güncelliğini koruyor. Kesinlikle herkesin okuması gereken bir eser.",
    dateAdded: "2024-03-15"
  }
};

// LocalStorage'dan kullanıcı verilerini yükle veya varsayılan değerleri kullan
const loadUsersFromStorage = () => {
  const storedUsers = localStorage.getItem('buk_users');
  if (storedUsers) {
    return JSON.parse(storedUsers);
  }
  return {
    "me": {
      id: "me",
      username: "yusuf kerem",
      avatarUrl: meAvatar,
      books: {
        "1984": {
          status: "read",
          rating: 5,
          liked: true,
          dateAdded: "2024-03-01",
          dateRead: "2024-03-15"
        },
        "cesur-yeni-dunya": {
          status: "reading",
          liked: false,
          dateAdded: "2024-03-10"
        },
        "odysseia": {
          status: "want-to-read",
          liked: true,
          dateAdded: "2024-03-20"
        }
      },
      following: ["edos", "aysenur", "mert", "ikra"]
    },
    "edos": {
      id: "edos",
      username: "edoş",
      avatarUrl: anonAvatar,
      books: {
        "1984": {
          status: "read",
          rating: 5,
          liked: true,
          dateAdded: "2024-03-15",
          dateRead: "2024-03-20"
        }
      },
      following: ["me", "aysenur"]
    },
    "aysenur": {
      id: "aysenur",
      username: "ayşenur",
      avatarUrl: anonAvatar,
      books: {
        "cesur-yeni-dunya": {
          status: "read",
          rating: 1.5,
          liked: false,
          dateAdded: "2024-03-18",
          dateRead: "2024-03-19"
        }
      },
      following: ["me", "edos"]
    },
    "mert": {
      id: "mert",
      username: "mert",
      avatarUrl: anonAvatar,
      books: {
        "odysseia": {
          status: "read",
          rating: 3.5,
          liked: true,
          dateAdded: "2024-03-17",
          dateRead: "2024-03-18"
        }
      },
      following: ["me"]
    },
    "ikra": {
      id: "ikra",
      username: "ikra",
      avatarUrl: anonAvatar,
      books: {
        "hayvan-ciftligi": {
          status: "read",
          rating: 4,
          liked: true,
          dateAdded: "2024-03-16",
          dateRead: "2024-03-17"
        }
      },
      following: ["me", "mert"]
    }
  };
};

// Kullanıcı verilerini localStorage'a kaydet
const saveUsersToStorage = (users) => {
  localStorage.setItem('buk_users', JSON.stringify(users));
};

// Kullanıcılar ve kitaplarla etkileşimleri
export let users = loadUsersFromStorage();

// Helper fonksiyonlar
export const getCurrentUser = () => users["me"];

// Popüler kitapları getir (şimdilik sabit liste)
export const getPopularBooks = () => {
  return ["1984", "cesur-yeni-dunya", "odysseia", "cocuklugun-sonu", "hayvan-ciftligi"]
    .map(id => books[id]);
};

// Arkadaşların son aktivitelerini getir (review'lere göre)
export const getFriendsRecentActivity = () => {
  const currentUser = getCurrentUser();
  
  // Tüm review'leri filtrele ve sadece takip edilen kullanıcıların review'lerini al
  return Object.values(reviews)
    .filter(review => currentUser.following.includes(review.userId))
    .map(review => ({
      ...review,
      book: books[review.bookId],
      user: users[review.userId]
    }))
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
};

// Arkadaşlar arasında popüler olan kitapları getir
export const getPopularWithFriends = () => {
  const currentUser = getCurrentUser();
  const friendsBooks = currentUser.following
    .flatMap(friendId => {
      const friend = users[friendId];
      return Object.entries(friend.books)
        .filter(([_, data]) => data.liked)
        .map(([bookId]) => bookId);
    });
  
  // En çok beğenilen kitapları say ve sırala
  const bookCounts = friendsBooks.reduce((acc, bookId) => {
    acc[bookId] = (acc[bookId] || 0) + 1;
    return acc;
  }, {});
  
  return Object.entries(bookCounts)
    .sort(([, a], [, b]) => b - a)
    .map(([bookId]) => books[bookId]);
};

// Kullanıcının okuma listelerini getir
export const getUserBooksByStatus = (userId, status) => {
  const user = users[userId];
  if (!user) return [];
  
  return Object.entries(user.books)
    .filter(([_, data]) => data.status === status)
    .map(([bookId, data]) => ({
      ...books[bookId],
      ...data
    }))
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
};

// Kullanıcının son okuduğu kitapları getir
export const getRecentBooks = () => {
  const currentUser = getCurrentUser();
  return Object.entries(currentUser.books)
    .filter(([_, data]) => data.status === 'read')
    .map(([bookId, data]) => ({
      ...books[bookId],
      ...data
    }))
    .sort((a, b) => new Date(b.dateRead || b.dateAdded) - new Date(a.dateRead || a.dateAdded));
};

// Kitap durumunu güncelle
export const updateBookStatus = (userId, bookId, status) => {
  if (!users[userId]) return;
  
  const now = new Date().toISOString();
  
  if (!users[userId].books[bookId]) {
    users[userId].books[bookId] = {
      status,
      dateAdded: now,
      ...(status === 'read' || status === 'both' ? { dateRead: now } : {})
    };
  } else {
    const currentBook = users[userId].books[bookId];
    if (status === null) {
      // Eğer status null ise ve başka bir veri yoksa (like gibi), kitabı tamamen kaldır
      if (!currentBook.liked && !currentBook.rating) {
        delete users[userId].books[bookId];
      } else {
        // Sadece status'ü kaldır
        delete currentBook.status;
        delete currentBook.dateRead;
      }
    } else {
      currentBook.status = status;
      // Status değiştiğinde dateAdded'ı güncelle
      currentBook.dateAdded = now;
      // Eğer status "read" veya "both" ise dateRead'i güncelle
      if (status === 'read' || status === 'both') {
        currentBook.dateRead = now;
      } else if (status === 'want-to-read') {
        // Eğer sadece "want-to-read" ise dateRead'i kaldır
        delete currentBook.dateRead;
      }
    }
  }
  
  // Değişiklikleri localStorage'a kaydet
  saveUsersToStorage(users);
};

// Kitap puanını güncelle
export const updateBookRating = (userId, bookId, rating) => {
  if (!users[userId]) return;
  
  const now = new Date().toISOString();
  
  if (!users[userId].books[bookId]) {
    users[userId].books[bookId] = {
      rating,
      status: rating > 0 ? 'read' : null, // Puan verilen kitap otomatik olarak okunmuş sayılır
      dateAdded: now,
      dateRead: rating > 0 ? now : null
    };
  } else {
    const currentBook = users[userId].books[bookId];
    if (rating === 0) {
      // Eğer rating sıfırlanıyorsa ve başka veri yoksa, kitabı kaldır
      if (!currentBook.liked && !currentBook.status) {
        delete users[userId].books[bookId];
      } else {
        // Sadece rating'i kaldır
        delete currentBook.rating;
      }
    } else {
      currentBook.rating = rating;
      // Puan verilen kitap otomatik olarak okunmuş sayılır
      if (!currentBook.status || currentBook.status !== 'read') {
        currentBook.status = 'read';
        currentBook.dateRead = now;
        currentBook.dateAdded = currentBook.dateAdded || now;
      }
    }
  }
  
  // Değişiklikleri localStorage'a kaydet
  saveUsersToStorage(users);
};

// Kitabı beğen/beğenmekten vazgeç
export const toggleBookLike = (userId, bookId) => {
  if (!users[userId]) return;
  
  if (!users[userId].books[bookId]) {
    users[userId].books[bookId] = {
      liked: true,
      dateAdded: new Date().toISOString()
    };
  } else {
    users[userId].books[bookId].liked = !users[userId].books[bookId].liked;
  }
  
  // Değişiklikleri localStorage'a kaydet
  saveUsersToStorage(users);
};

// Review ekleme fonksiyonu
export const addReview = (userId, bookId, text, rating) => {
  const newId = Math.max(...Object.keys(reviews).map(Number)) + 1;
  
  reviews[newId] = {
    id: newId,
    userId,
    bookId,
    rating,
    text,
    dateAdded: new Date().toISOString()
  };
  
  // Kitabı otomatik olarak okundu olarak işaretle ve puanla
  updateBookStatus(userId, bookId, "read");
  updateBookRating(userId, bookId, rating);
  
  return reviews[newId];
};

// Review silme fonksiyonu
export const deleteReview = (reviewId) => {
  if (reviews[reviewId]) {
    delete reviews[reviewId];
    return true;
  }
  return false;
};

// Review güncelleme fonksiyonu
export const updateReview = (reviewId, updates) => {
  if (reviews[reviewId]) {
    reviews[reviewId] = {
      ...reviews[reviewId],
      ...updates,
      dateAdded: new Date().toISOString() // Güncelleme tarihini değiştir
    };
    return reviews[reviewId];
  }
  return null;
}; 