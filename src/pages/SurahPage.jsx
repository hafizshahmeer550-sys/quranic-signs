import React from 'react';
import { Link } from 'react-router-dom';

const SurahPage = () => {
  // Complete List of 114 Surahs
  const surahs = [
    { id: 1, name: 'Al-Faatiha', arabic: 'الفاتحة', verses: 7, meaning: 'The Opening', type: 'Meccan' },
    { id: 2, name: 'Al-Baqara', arabic: 'البقرة', verses: 286, meaning: 'The Cow', type: 'Medinan' },
    { id: 3, name: 'Al-iImraan', arabic: 'آل عمران', verses: 200, meaning: 'The Family of Imraan', type: 'Medinan' },
    { id: 4, name: 'An-Nisa', arabic: 'النساء', verses: 176, meaning: 'The Women', type: 'Medinan' },
    { id: 5, name: 'Al-Maidah', arabic: 'المائدة', verses: 120, meaning: 'The Table Spread', type: 'Medinan' },
    { id: 6, name: 'Al-Anam', arabic: 'الأنعام', verses: 165, meaning: 'The Cattle', type: 'Meccan' },
    { id: 7, name: 'Al-Araf', arabic: 'الأعراف', verses: 206, meaning: 'The Heights', type: 'Meccan' },
    { id: 8, name: 'Al-Anfal', arabic: 'الأنفال', verses: 75, meaning: 'The Spoils of War', type: 'Medinan' },
    { id: 9, name: 'At-Tawbah', arabic: 'التوبة', verses: 129, meaning: 'The Repentance', type: 'Medinan' },
    { id: 10, name: 'Yunus', arabic: 'يونس', verses: 109, meaning: 'Jonah', type: 'Meccan' },
    { id: 11, name: 'Hud', arabic: 'هود', verses: 123, meaning: 'Hud', type: 'Meccan' },
    { id: 12, name: 'Yusuf', arabic: 'يوسف', verses: 111, meaning: 'Joseph', type: 'Meccan' },
    { id: 13, name: 'Ar-Rad', arabic: 'الرعد', verses: 43, meaning: 'The Thunder', type: 'Medinan' },
    { id: 14, name: 'Ibrahim', arabic: 'إبراهيم', verses: 52, meaning: 'Abraham', type: 'Meccan' },
    { id: 15, name: 'Al-Hijr', arabic: 'الحجر', verses: 99, meaning: 'The Rocky Tract', type: 'Meccan' },
    { id: 16, name: 'An-Nahl', arabic: 'النحل', verses: 128, meaning: 'The Bee', type: 'Meccan' },
    { id: 17, name: 'Al-Isra', arabic: 'الإسراء', verses: 111, meaning: 'The Night Journey', type: 'Meccan' },
    { id: 18, name: 'Al-Kahf', arabic: 'الكهف', verses: 110, meaning: 'The Cave', type: 'Meccan' },
    { id: 19, name: 'Maryam', arabic: 'مريم', verses: 98, meaning: 'Mary', type: 'Meccan' },
    { id: 20, name: 'Ta-Ha', arabic: 'طه', verses: 135, meaning: 'Ta-Ha', type: 'Meccan' },
    { id: 21, name: 'Al-Anbiya', arabic: 'الأنبياء', verses: 112, meaning: 'The Prophets', type: 'Meccan' },
    { id: 22, name: 'Al-Hajj', arabic: 'الحج', verses: 78, meaning: 'The Pilgrimage', type: 'Medinan' },
    { id: 23, name: 'Al-Muminun', arabic: 'المؤمنون', verses: 118, meaning: 'The Believers', type: 'Meccan' },
    { id: 24, name: 'An-Nur', arabic: 'النور', verses: 64, meaning: 'The Light', type: 'Medinan' },
    { id: 25, name: 'Al-Furqan', arabic: 'الفرقان', verses: 77, meaning: 'The Criterion', type: 'Meccan' },
    { id: 26, name: 'Ash-Shuara', arabic: 'الشعراء', verses: 227, meaning: 'The Poets', type: 'Meccan' },
    { id: 27, name: 'An-Naml', arabic: 'النمل', verses: 93, meaning: 'The Ants', type: 'Meccan' },
    { id: 28, name: 'Al-Qasas', arabic: 'القصص', verses: 88, meaning: 'The Stories', type: 'Meccan' },
    { id: 29, name: 'Al-Ankabut', arabic: 'العنكبوت', verses: 69, meaning: 'The Spider', type: 'Meccan' },
    { id: 30, name: 'Ar-Rum', arabic: 'الروم', verses: 60, meaning: 'The Romans', type: 'Meccan' },
    { id: 31, name: 'Luqman', arabic: 'لقمان', verses: 34, meaning: 'Luqman', type: 'Meccan' },
    { id: 32, name: 'As-Sajdah', arabic: 'السجدة', verses: 30, meaning: 'The Prostration', type: 'Meccan' },
    { id: 33, name: 'Al-Ahzab', arabic: 'الأحزاب', verses: 73, meaning: 'The Combined Forces', type: 'Medinan' },
    { id: 34, name: 'Saba', arabic: 'سبأ', verses: 54, meaning: 'Sheba', type: 'Meccan' },
    { id: 35, name: 'Fatir', arabic: 'فاطر', verses: 45, meaning: 'The Originator', type: 'Meccan' },
    { id: 36, name: 'Ya-Sin', arabic: 'يس', verses: 83, meaning: 'Ya-Sin', type: 'Meccan' },
    { id: 37, name: 'As-Saffat', arabic: 'الصافات', verses: 182, meaning: 'Those Who Set The Ranks', type: 'Meccan' },
    { id: 38, name: 'Sad', arabic: 'ص', verses: 88, meaning: 'Sad', type: 'Meccan' },
    { id: 39, name: 'Az-Zumar', arabic: 'الزمر', verses: 75, meaning: 'The Troops', type: 'Meccan' },
    { id: 40, name: 'Ghafir', arabic: 'غافر', verses: 85, meaning: 'The Forgiver', type: 'Meccan' },
    { id: 41, name: 'Fussilat', arabic: 'فصلت', verses: 54, meaning: 'Explained in Detail', type: 'Meccan' },
    { id: 42, name: 'Ash-Shura', arabic: 'الشورى', verses: 53, meaning: 'The Consultation', type: 'Meccan' },
    { id: 43, name: 'Az-Zukhruf', arabic: 'الزخرف', verses: 89, meaning: 'The Ornaments of Gold', type: 'Meccan' },
    { id: 44, name: 'Ad-Dukhan', arabic: 'الدخان', verses: 59, meaning: 'The Smoke', type: 'Meccan' },
    { id: 45, name: 'Al-Jathiyah', arabic: 'الجاثية', verses: 37, meaning: 'The Crouching', type: 'Meccan' },
    { id: 46, name: 'Al-Ahqaf', arabic: 'الأحقاف', verses: 35, meaning: 'The Sand Dunes', type: 'Meccan' },
    { id: 47, name: 'Muhammad', arabic: 'محمد', verses: 38, meaning: 'Muhammad', type: 'Medinan' },
    { id: 48, name: 'Al-Fath', arabic: 'الفتح', verses: 29, meaning: 'The Victory', type: 'Medinan' },
    { id: 49, name: 'Al-Hujurat', arabic: 'الحجرات', verses: 18, meaning: 'The Rooms', type: 'Medinan' },
    { id: 50, name: 'Qaf', arabic: 'ق', verses: 45, meaning: 'Qaf', type: 'Meccan' },
    { id: 51, name: 'Adh-Dhariyat', arabic: 'الذاريات', verses: 60, meaning: 'The Winnowing Winds', type: 'Meccan' },
    { id: 52, name: 'At-Tur', arabic: 'الطور', verses: 49, meaning: 'The Mount', type: 'Meccan' },
    { id: 53, name: 'An-Najm', arabic: 'النجم', verses: 62, meaning: 'The Star', type: 'Meccan' },
    { id: 54, name: 'Al-Qamar', arabic: 'القمر', verses: 55, meaning: 'The Moon', type: 'Meccan' },
    { id: 55, name: 'Ar-Rahman', arabic: 'الرحمن', verses: 78, meaning: 'The Beneficent', type: 'Medinan' },
    { id: 56, name: 'Al-Waqiah', arabic: 'الواقعة', verses: 96, meaning: 'The Inevitable', type: 'Meccan' },
    { id: 57, name: 'Al-Hadid', arabic: 'الحديد', verses: 29, meaning: 'The Iron', type: 'Medinan' },
    { id: 58, name: 'Al-Mujadila', arabic: 'المجادلة', verses: 22, meaning: 'The Pleading Woman', type: 'Medinan' },
    { id: 59, name: 'Al-Hashr', arabic: 'الحشر', verses: 24, meaning: 'The Exile', type: 'Medinan' },
    { id: 60, name: 'Al-Mumtahanah', arabic: 'الممتحنة', verses: 13, meaning: 'She That Is To Be Examined', type: 'Medinan' },
    { id: 61, name: 'As-Saff', arabic: 'الصف', verses: 14, meaning: 'The Ranks', type: 'Medinan' },
    { id: 62, name: 'Al-Jumuah', arabic: 'الجمعة', verses: 11, meaning: 'The Congregation', type: 'Medinan' },
    { id: 63, name: 'Al-Munafiqun', arabic: 'المنافقون', verses: 11, meaning: 'The Hypocrites', type: 'Medinan' },
    { id: 64, name: 'At-Taghabun', arabic: 'التغابن', verses: 18, meaning: 'The Mutual Disillusion', type: 'Medinan' },
    { id: 65, name: 'At-Talaq', arabic: 'الطلاق', verses: 12, meaning: 'The Divorce', type: 'Medinan' },
    { id: 66, name: 'At-Tahrim', arabic: 'التحريم', verses: 12, meaning: 'The Prohibition', type: 'Medinan' },
    { id: 67, name: 'Al-Mulk', arabic: 'الملك', verses: 30, meaning: 'The Sovereignty', type: 'Meccan' },
    { id: 68, name: 'Al-Qalam', arabic: 'القلم', verses: 52, meaning: 'The Pen', type: 'Meccan' },
    { id: 69, name: 'Al-Haqqah', arabic: 'الحاقة', verses: 52, meaning: 'The Reality', type: 'Meccan' },
    { id: 70, name: 'Al-Maarij', arabic: 'المعارج', verses: 44, meaning: 'The Ascending Stairways', type: 'Meccan' },
    { id: 71, name: 'Nuh', arabic: 'نوح', verses: 28, meaning: 'Noah', type: 'Meccan' },
    { id: 72, name: 'Al-Jinn', arabic: 'الجن', verses: 28, meaning: 'The Jinn', type: 'Meccan' },
    { id: 73, name: 'Al-Muzzammil', arabic: 'المزمل', verses: 20, meaning: 'The Enshrouded One', type: 'Meccan' },
    { id: 74, name: 'Al-Muddaththir', arabic: 'المدثر', verses: 56, meaning: 'The Cloaked One', type: 'Meccan' },
    { id: 75, name: 'Al-Qiyamah', arabic: 'القيامة', verses: 40, meaning: 'The Resurrection', type: 'Meccan' },
    { id: 76, name: 'Al-Insan', arabic: 'الإنسان', verses: 31, meaning: 'The Man', type: 'Medinan' },
    { id: 77, name: 'Al-Mursalat', arabic: 'المرسلات', verses: 50, meaning: 'The Emissaries', type: 'Meccan' },
    { id: 78, name: 'An-Naba', arabic: 'النبأ', verses: 40, meaning: 'The Great News', type: 'Meccan' },
    { id: 79, name: 'An-Naziat', arabic: 'النازعات', verses: 46, meaning: 'Those Who Drag Forth', type: 'Meccan' },
    { id: 80, name: 'Abasa', arabic: 'عبس', verses: 42, meaning: 'He Frowned', type: 'Meccan' },
    { id: 81, name: 'At-Takwir', arabic: 'التكوير', verses: 29, meaning: 'The Overthrowing', type: 'Meccan' },
    { id: 82, name: 'Al-Infitar', arabic: 'الانفطار', verses: 19, meaning: 'The Cleaving', type: 'Meccan' },
    { id: 83, name: 'Al-Mutaffifin', arabic: 'المطففين', verses: 36, meaning: 'The Defrauding', type: 'Meccan' },
    { id: 84, name: 'Al-Inshiqaq', arabic: 'الانشقاق', verses: 25, meaning: 'The Sundering', type: 'Meccan' },
    { id: 85, name: 'Al-Buruj', arabic: 'البروج', verses: 22, meaning: 'The Mansions of the Stars', type: 'Meccan' },
    { id: 86, name: 'At-Tariq', arabic: 'الطارق', verses: 17, meaning: 'The Nightcomer', type: 'Meccan' },
    { id: 87, name: 'Al-Ala', arabic: 'الأعلى', verses: 19, meaning: 'The Most High', type: 'Meccan' },
    { id: 88, name: 'Al-Ghashiyah', arabic: 'الغاشية', verses: 26, meaning: 'The Overwhelming', type: 'Meccan' },
    { id: 89, name: 'Al-Fajr', arabic: 'الفجر', verses: 30, meaning: 'The Dawn', type: 'Meccan' },
    { id: 90, name: 'Al-Balad', arabic: 'البلد', verses: 20, meaning: 'The City', type: 'Meccan' },
    { id: 91, name: 'Ash-Shams', arabic: 'الشمس', verses: 15, meaning: 'The Sun', type: 'Meccan' },
    { id: 92, name: 'Al-Layl', arabic: 'الليل', verses: 21, meaning: 'The Night', type: 'Meccan' },
    { id: 93, name: 'Ad-Duha', arabic: 'الضحى', verses: 11, meaning: 'The Morning Hours', type: 'Meccan' },
    { id: 94, name: 'Ash-Sharh', arabic: 'الشرح', verses: 8, meaning: 'The Relief', type: 'Meccan' },
    { id: 95, name: 'At-Tin', arabic: 'التين', verses: 8, meaning: 'The Fig', type: 'Meccan' },
    { id: 96, name: 'Al-Alaq', arabic: 'العلق', verses: 19, meaning: 'The Clot', type: 'Meccan' },
    { id: 97, name: 'Al-Qadr', arabic: 'القدر', verses: 5, meaning: 'The Power', type: 'Meccan' },
    { id: 98, name: 'Al-Bayyinah', arabic: 'البينة', verses: 8, meaning: 'The Clear Proof', type: 'Medinan' },
    { id: 99, name: 'Az-Zalzalah', arabic: 'الزلزلة', verses: 8, meaning: 'The Earthquake', type: 'Medinan' },
    { id: 100, name: 'Al-Adiyat', arabic: 'العاديات', verses: 11, meaning: 'The Courser', type: 'Meccan' },
    { id: 101, name: 'Al-Qariah', arabic: 'القارعة', verses: 11, meaning: 'The Calamity', type: 'Meccan' },
    { id: 102, name: 'At-Takathur', arabic: 'التكاثر', verses: 8, meaning: 'The Rivalry in World Increase', type: 'Meccan' },
    { id: 103, name: 'Al-Asr', arabic: 'العصر', verses: 3, meaning: 'The Time', type: 'Meccan' },
    { id: 104, name: 'Al-Humazah', arabic: 'الهمزة', verses: 9, meaning: 'The Slanderer', type: 'Meccan' },
    { id: 105, name: 'Al-Fil', arabic: 'الفيل', verses: 5, meaning: 'The Elephant', type: 'Meccan' },
    { id: 106, name: 'Quraysh', arabic: 'قريش', verses: 4, meaning: 'Quraysh', type: 'Meccan' },
    { id: 107, name: 'Al-Maun', arabic: 'الماعون', verses: 7, meaning: 'The Small Kindnesses', type: 'Meccan' },
    { id: 108, name: 'Al-Kawthar', arabic: 'الكوثر', verses: 3, meaning: 'The Abundance', type: 'Meccan' },
    { id: 109, name: 'Al-Kafirun', arabic: 'الكافرون', verses: 6, meaning: 'The Disbelievers', type: 'Meccan' },
    { id: 110, name: 'An-Nasr', arabic: 'النصر', verses: 3, meaning: 'The Divine Support', type: 'Medinan' },
    { id: 111, name: 'Al-Masad', arabic: 'المسد', verses: 5, meaning: 'The Palm Fiber', type: 'Meccan' },
    { id: 112, name: 'Al-Ikhlas', arabic: 'الإخلاص', verses: 4, meaning: 'The Sincerity', type: 'Meccan' },
    { id: 113, name: 'Al-Falaq', arabic: 'الفلق', verses: 5, meaning: 'The Daybreak', type: 'Meccan' },
    { id: 114, name: 'An-Nas', arabic: 'الناس', verses: 6, meaning: 'The Mankind', type: 'Meccan' }
  ];

  return (
    <div className="surah-page">
      <div className="container-premium">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Read Quran</h1>
          <p className="page-subtitle">Explore the words of Allah</p>
        </div>

        {/* Surahs Grid */}
        <div className="surah-grid">
          {surahs.map((surah) => (
            <Link 
              key={surah.id} 
              to={`/surah/${surah.id}`} 
              className="surah-card"
            >
              <span className="surah-number">{surah.id}</span>
              <div className="surah-info">
                <h3 className="surah-name">{surah.name}</h3>
                <p className="surah-arabic">{surah.arabic}</p>
                <p className="surah-meta">{surah.meaning} • {surah.verses} Verses • {surah.type}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurahPage;