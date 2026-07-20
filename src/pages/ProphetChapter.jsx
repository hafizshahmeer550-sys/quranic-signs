import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProphetChapter = () => {
  const { id } = useParams();

  // Complete Chapter Data with Quranic References and Hadith
  const chapterData = {
    1: {
      id: 1,
      title: "Birth & Early Life",
      subtitle: "570 CE - 610 CE",
      description: "Prophet Muhammad (ﷺ) was born in Mecca in the Year of the Elephant (570 CE). He was born into the noble Banu Hashim clan of the Quraysh tribe.",
      details: [
        {
          heading: "Birth & Lineage",
          text: "Prophet Muhammad (ﷺ) was born on Monday, 12th Rabi' al-Awwal, in the Year of the Elephant. His full lineage is: Muhammad ibn Abdullah ibn Abdul-Muttalib ibn Hashim ibn Abd Manaf ibn Qusayy ibn Kilab ibn Murrah ibn Ka'b ibn Lu'ayy ibn Ghalib ibn Fihr ibn Malik ibn An-Nadr ibn Kinanah ibn Khuzaymah ibn Mudrikah ibn Ilyas ibn Mudar ibn Nizar ibn Ma'add ibn Adnan.",
          reference: "Seerah of Ibn Hisham",
          hadith: "The Prophet (ﷺ) said: 'I am the son of two sacrificial offerings.' (referring to Ismail and Abdullah) - Sunan Ibn Majah"
        },
        {
          heading: "The Year of the Elephant",
          text: "The Year of the Elephant refers to the year when Abraha, the Christian ruler of Yemen, marched with an army of elephants to destroy the Kaaba. Allah protected the Kaaba by sending birds that pelted the army with stones.",
          quranRef: "105:1-5",
          quranText: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ . أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ . وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ . تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ . فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ",
          quranTranslation: "Have you not considered how your Lord dealt with the companions of the elephant? Did He not make their plan into misguidance? And He sent against them birds in flocks, striking them with stones of baked clay, making them like eaten straw."
        }
      ]
    },
    2: {
      id: 2,
      title: "The First Revelation",
      subtitle: "610 CE",
      description: "At the age of 40, while meditating in the Cave of Hira on Mount Nur, Prophet Muhammad (ﷺ) received the first revelation from Angel Gabriel (Jibril).",
      details: [
        {
          heading: "The Cave of Hira",
          text: "The Prophet (ﷺ) would retreat to the Cave of Hira on Mount Nur, a mountain about two miles from Mecca. He would spend days in solitude, contemplating the creation of Allah. This was his preparation for prophethood.",
          reference: "Sahih Bukhari",
          hadith: "The Prophet (ﷺ) said: 'The first thing that Allah created was the pen.' - Sunan al-Tirmidhi"
        },
        {
          heading: "The First Revelation",
          text: "One night during Ramadan, Angel Gabriel appeared to the Prophet (ﷺ) and commanded him to read. The Prophet (ﷺ) replied 'I cannot read.' The angel embraced him and repeated the command three times. Then he revealed the first five verses of Surah Al-Alaq.",
          quranRef: "96:1-5",
          quranText: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ . خَلَقَ الْإِنْسَانَ مِنْ عَلَقٍ . اقْرَأْ وَرَبُّكَ الْأَكْرَمُ . الَّذِي عَلَّمَ بِالْقَلَمِ . عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ",
          quranTranslation: "Recite in the name of your Lord who created. Created man from a clinging clot. Recite, and your Lord is the most Generous. Who taught by the pen. Taught man that which he knew not.",
          hadith: "The Prophet (ﷺ) said: 'The first thing that was revealed to me was: Recite in the name of your Lord who created.' - Sahih Bukhari"
        },
        {
          heading: "Khadijah's Support",
          text: "After the revelation, the Prophet (ﷺ) rushed to his wife Khadijah, trembling. She wrapped him in a blanket and said: 'By Allah, Allah will never disgrace you. You uphold ties of kinship, speak the truth, help the poor, and serve your guests.' She then took him to her cousin Waraqah ibn Nawfal, a Christian scholar, who confirmed his prophethood.",
          hadith: "The Prophet (ﷺ) said: 'Allah never sent a prophet who was not a shepherd.' - Sahih Bukhari"
        }
      ]
    },
    3: {
      id: 3,
      title: "Early Preaching & Opposition",
      subtitle: "610 CE - 613 CE",
      description: "The Prophet (ﷺ) began preaching Islam secretly for the first three years, then publicly faced severe opposition from the Quraysh.",
      details: [
        {
          heading: "Secret Preaching",
          text: "For the first three years, the Prophet (ﷺ) preached secretly to his close companions. The first to believe were his wife Khadijah, his cousin Ali (age 10), his friend Abu Bakr, and his freed slave Zayd ibn Harithah. The number of early Muslims reached about 40 people.",
          reference: "Seerah of Ibn Hisham",
          hadith: "The Prophet (ﷺ) said: 'Every prophet was given a sign, and I have been given the Quran as a miracle.' - Sahih Bukhari"
        },
        {
          heading: "Public Preaching",
          text: "When the Prophet (ﷺ) was commanded to preach publicly, he stood on Mount Safa and called the Quraysh tribes. He warned them of the punishment of Allah if they did not accept Islam. This led to severe opposition and persecution.",
          quranRef: "26:214",
          quranText: "وَأَنذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ",
          quranTranslation: "And warn your closest relatives."
        },
        {
          heading: "The Persecution",
          text: "The early Muslims faced severe persecution. They were mocked, tortured, and boycotted. Bilal ibn Rabah was dragged through the streets. Sumayyah was killed - the first martyr of Islam. The Prophet (ﷺ) encouraged patience and perseverance.",
          quranRef: "29:2-3",
          quranText: "أَحَسِبَ النَّاسُ أَن يُتْرَكُوا أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ . وَلَقَدْ فَتَنَّا الَّذِينَ مِن قَبْلِهِمْ",
          quranTranslation: "Do people think they will be left alone saying we believe and they will not be tested? We have tested those before them.",
          hadith: "The Prophet (ﷺ) said: 'The people of the most severe trials are the prophets, then those who are next to them.' - Sunan al-Tirmidhi"
        }
      ]
    },
    4: {
      id: 4,
      title: "Migration to Abyssinia",
      subtitle: "615 CE",
      description: "Due to severe persecution, the Prophet (ﷺ) advised a group of early Muslims to migrate to Abyssinia (Ethiopia).",
      details: [
        {
          heading: "The First Migration",
          text: "In the fifth year of prophethood, the Prophet (ﷺ) told his companions: 'If you go to Abyssinia, there is a king who does not oppress anyone.' About twelve men and women migrated to Abyssinia, led by Uthman ibn Affan and his wife Ruqayyah, the Prophet's daughter.",
          reference: "Seerah of Ibn Hisham",
          hadith: "The Prophet (ﷺ) said: 'Be merciful to those on earth, and the One in heaven will have mercy on you.' - Sunan al-Tirmidhi"
        },
        {
          heading: "The Second Migration",
          text: "A larger group of about 83 men and women migrated to Abyssinia. The Quraysh sent emissaries to the Negus to demand their return. The Negus questioned the Muslims about their faith. Ja'far ibn Abi Talib recited Surah Maryam, and the Negus was moved to tears.",
          quranRef: "19:16-40",
          quranText: "وَاذْكُرْ فِي الْكِتَابِ مَرْيَمَ إِذِ انتَبَذَتْ مِنْ أَهْلِهَا مَكَانًا شَرْقِيًّا",
          quranTranslation: "And mention in the Book Mary, when she withdrew from her family to a place to the east."
        },
        {
          heading: "The Negus' Response",
          text: "After hearing the verses, the Negus said: 'This and what Jesus brought come from the same source.' He refused to hand over the Muslims, saying: 'If you were to give me a mountain of gold, I would not give them up.' The Negus later accepted Islam.",
          hadith: "The Prophet (ﷺ) said: 'The Negus was a righteous king who did not oppress anyone.' - Sahih Muslim"
        }
      ]
    },
    5: {
      id: 5,
      title: "The Year of Sadness",
      subtitle: "619 CE",
      description: "This year was known as 'Aam al-Huzn' because two of the Prophet's greatest supporters passed away.",
      details: [
        {
          heading: "The Death of Khadijah",
          text: "Khadijah (RA) was the Prophet's (ﷺ) beloved wife and first supporter. She was his comfort and strength. She spent her wealth in the cause of Islam and stood by him through all hardships. She died in Ramadan of the tenth year of prophethood at the age of 65.",
          reference: "Seerah of Ibn Hisham",
          hadith: "The Prophet (ﷺ) said: 'She believed in me when others disbelieved, and she spent her wealth when others denied me.' - Sahih Bukhari"
        },
        {
          heading: "The Death of Abu Talib",
          text: "Abu Talib was the Prophet's (ﷺ) uncle who protected him from the Quraysh. Even though he did not accept Islam, he remained a shield for the Prophet. His death left the Prophet vulnerable to persecution.",
          quranRef: "28:56",
          quranText: "إِنَّكَ لَا تَهْدِي مَنْ أَحْبَبْتَ وَلَٰكِنَّ اللَّهَ يَهْدِي مَن يَشَاءُ",
          quranTranslation: "Indeed, you do not guide whom you love, but Allah guides whom He wills."
        },
        {
          heading: "The Journey to Ta'if",
          text: "After losing his two greatest supporters, the Prophet (ﷺ) traveled to Ta'if seeking refuge. The people of Ta'if rejected him harshly, throwing stones at him. He was wounded and bleeding, but he prayed to Allah: 'If You are not angry with me, I do not care...'",
          hadith: "The Prophet (ﷺ) said: 'The most beloved of days to Allah is the day of Arafah.' - Sahih Muslim"
        }
      ]
    },
    6: {
      id: 6,
      title: "The Night Journey & Ascension",
      subtitle: "621 CE",
      description: "The Isra and Mi'raj is a miraculous journey where the Prophet (ﷺ) traveled from Mecca to Jerusalem and ascended through the heavens.",
      details: [
        {
          heading: "The Journey to Jerusalem (Isra)",
          text: "The Prophet (ﷺ) was taken from the Kaaba in Mecca to the Farthest Mosque in Jerusalem on a winged animal called Buraq. There, he led all the prophets in prayer and ascended to the heavens.",
          quranRef: "17:1",
          quranText: "سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى",
          quranTranslation: "Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa."
        },
        {
          heading: "The Ascension (Mi'raj)",
          text: "The Prophet (ﷺ) ascended through the seven heavens, meeting prophets along the way: Adam, Jesus, John, Joseph, Idris, Aaron, Moses, and Abraham. He was brought to the Lote Tree of the Utmost Boundary (Sidrat al-Muntaha).",
          quranRef: "53:13-18",
          quranText: "وَلَقَدْ رَآهُ نَزْلَةً أُخْرَىٰ . عِندَ سِدْرَةِ الْمُنتَهَىٰ",
          quranTranslation: "And he certainly saw him in another descent. At the Lote Tree of the Utmost Boundary."
        },
        {
          heading: "The Gift of Prayer",
          text: "During this journey, Allah prescribed the five daily prayers for the Muslims. Initially 50 prayers were commanded, but upon Moses' advice, the Prophet (ﷺ) returned to Allah multiple times until it was reduced to five.",
          hadith: "The Prophet (ﷺ) said: 'Allah made fifty prayers obligatory upon my nation. I kept going back to Him until He made it five.' - Sahih Bukhari"
        }
      ]
    },
    7: {
      id: 7,
      title: "The Hijrah (Migration to Medina)",
      subtitle: "622 CE",
      description: "The Hijrah marks the beginning of the Islamic calendar. The Prophet (ﷺ) migrated from Mecca to Medina.",
      details: [
        {
          heading: "The Migration",
          text: "After receiving pledges from the people of Medina (Yathrib), the Prophet (ﷺ) instructed his companions to migrate. He stayed behind to return the trusts that people had left with him. He and Abu Bakr (RA) left Mecca at night and hid in the Cave of Thawr.",
          quranRef: "9:40",
          quranText: "إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ",
          quranTranslation: "If you do not aid him, Allah has already aided him when those who disbelieved drove him out as one of two, when they were in the cave."
        },
        {
          heading: "The Cave of Thawr",
          text: "The Prophet (ﷺ) and Abu Bakr (RA) hid in the Cave of Thawr for three days. A spider wove a web across the entrance, and a dove nested there, leading the Quraysh to believe no one was inside.",
          hadith: "The Prophet (ﷺ) said: 'O Abu Bakr, what do you think of two, the third of whom is Allah?' - Sahih Bukhari"
        },
        {
          heading: "Arrival in Medina",
          text: "The Prophet (ﷺ) arrived in Quba on Monday, 8th Rabi' al-Awwal. He stayed there for several days and built the first mosque. He then entered Medina on Friday, after the Hijrah, marking the beginning of the Islamic calendar (1 AH).",
          quranRef: "9:100",
          quranText: "وَالسَّابِقُونَ الْأَوَّلُونَ مِنَ الْمُهَاجِرِينَ وَالْأَنصَارِ",
          quranTranslation: "And the first forerunners among the Muhajirun and the Ansar."
        }
      ]
    },
    8: {
      id: 8,
      title: "Establishment of the Islamic State",
      subtitle: "622 CE - 624 CE",
      description: "In Medina, the Prophet (ﷺ) established the Constitution of Medina, uniting the Muhajirun and Ansar.",
      details: [
        {
          heading: "The Constitution of Medina",
          text: "The Prophet (ﷺ) established a written constitution that outlined the rights and duties of all citizens, including Muslims and Jews. It established the principle of justice and protection of all citizens of Medina.",
          reference: "Seerah of Ibn Hisham",
          hadith: "The Prophet (ﷺ) said: 'Whoever is unjust to a non-Muslim citizen, I will be his opponent on the Day of Judgment.' - Sunan Abu Dawud"
        },
        {
          heading: "Brotherhood Between Muhajirun and Ansar",
          text: "The Prophet (ﷺ) established brotherhood between the Muhajirun (migrants from Mecca) and the Ansar (helpers from Medina). Each Ansar took a Muhajir as his brother, sharing his home and wealth.",
          quranRef: "59:9",
          quranText: "وَالَّذِينَ تَبَوَّءُوا الدَّارَ وَالْإِيمَانَ مِن قَبْلِهِمْ يُحِبُّونَ مَنْ هَاجَرَ إِلَيْهِمْ",
          quranTranslation: "And those who were settled in the home and believed before them love those who migrated to them."
        },
        {
          heading: "The First Mosque",
          text: "The Prophet (ﷺ) built the first mosque in Medina, the Masjid al-Nabawi. It served as a place of worship, education, and community gathering. It became the center of Islamic life and governance.",
          hadith: "The Prophet (ﷺ) said: 'Whoever builds a mosque for Allah, Allah will build for him a house in Paradise.' - Sahih Bukhari"
        }
      ]
    },
    9: {
      id: 9,
      title: "The Great Battles",
      subtitle: "624 CE - 630 CE",
      description: "The Muslims faced several key battles: Badr, Uhud, and the Trench.",
      details: [
        {
          heading: "The Battle of Badr (2 AH)",
          text: "The Battle of Badr was the first major battle between the Muslims and the Quraysh. The Muslims were vastly outnumbered (313 vs 1000). Despite the odds, they achieved a decisive victory. It established the strength of the Muslim community.",
          quranRef: "3:123",
          quranText: "وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ وَأَنتُمْ أَذِلَّةٌ ۖ فَاتَّقُوا اللَّهَ لَعَلَّكُمْ تَشْكُرُونَ",
          quranTranslation: "And already Allah had given you victory at Badr while you were few in number. So fear Allah; perhaps you will be grateful.",
          hadith: "The Prophet (ﷺ) said: 'This is the day of Badr, the day on which Allah humiliated the polytheists.' - Sahih Muslim"
        },
        {
          heading: "The Battle of Uhud (3 AH)",
          text: "The Battle of Uhud was a test of faith for the Muslims. Initially, they were winning, but they suffered losses when the archers disobeyed orders. The Prophet (ﷺ) was injured, and several companions were killed.",
          quranRef: "3:152",
          quranText: "وَلَقَدْ صَدَقَكُمُ اللَّهُ وَعْدَهُ إِذْ تَحُسُّونَهُم بِإِذْنِهِ ۖ حَتَّىٰ إِذَا فَشِلْتُمْ وَتَنَازَعْتُمْ فِي الْأَمْرِ",
          quranTranslation: "And Allah had certainly fulfilled His promise to you when you were killing them by His permission until you lost courage and disagreed."
        },
        {
          heading: "The Battle of the Trench (5 AH)",
          text: "The Battle of the Trench was a defensive battle where the Muslims dug a trench around Medina to protect against the Quraysh forces. The enemies were unable to cross and retreated.",
          quranRef: "33:9",
          quranText: "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ إِذْ جَاءَتْكُمْ جُنُودٌ",
          quranTranslation: "O you who have believed, remember the favor of Allah upon you when armies came to you.",
          hadith: "The Prophet (ﷺ) said: 'Now we will go out against them, and they will not come out against us.' - Sahih Bukhari"
        }
      ]
    },
    10: {
      id: 10,
      title: "The Conquest of Mecca",
      subtitle: "630 CE",
      description: "The Treaty of Hudaybiyyah was broken by the Quraysh, leading to the peaceful conquest of Mecca.",
      details: [
        {
          heading: "The Treaty of Hudaybiyyah (6 AH)",
          text: "The Prophet (ﷺ) and his companions attempted to perform Umrah but were stopped by the Quraysh. They negotiated the Treaty of Hudaybiyyah, which included a 10-year peace agreement.",
          quranRef: "48:1",
          quranText: "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا",
          quranTranslation: "Indeed, We have given you a clear conquest.",
          hadith: "The Prophet (ﷺ) said: 'This is the greatest conquest.' - Sahih Bukhari"
        },
        {
          heading: "The Conquest (8 AH)",
          text: "When the Quraysh broke the treaty, the Prophet (ﷺ) marched to Mecca with 10,000 soldiers. He entered Mecca peacefully, forgave his enemies, and cleansed the Kaaba of idols. He declared the general amnesty: 'Go, for you are free.'",
          quranRef: "48:27",
          quranText: "لَّقَدْ صَدَقَ اللَّهُ رَسُولَهُ الرُّؤْيَا بِالْحَقِّ",
          quranTranslation: "Allah has certainly fulfilled His Messenger's vision in truth."
        },
        {
          heading: "The Forgiveness",
          text: "The Prophet (ﷺ) stood at the door of the Kaaba and said: 'O Quraysh, what do you think I will do to you?' They replied: 'You are a noble brother, the son of a noble brother.' He said: 'Go, for you are free.' This was the greatest act of mercy.",
          hadith: "The Prophet (ﷺ) said: 'The merciful ones will be shown mercy by the Most Merciful.' - Sunan al-Tirmidhi"
        }
      ]
    },
    11: {
      id: 11,
      title: "The Farewell Pilgrimage",
      subtitle: "632 CE",
      description: "The Prophet (ﷺ) performed his only Hajj pilgrimage and delivered the Farewell Sermon.",
      details: [
        {
          heading: "The Farewell Sermon",
          text: "During his final Hajj, the Prophet (ﷺ) delivered a sermon at Mount Arafat, addressing thousands of Muslims. He summarized the essence of Islam, emphasizing the sanctity of life, property, and honor.",
          quranRef: "5:3",
          quranText: "الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا",
          quranTranslation: "This day I have perfected for you your religion and completed My favor upon you and have approved for you Islam as religion.",
          hadith: "The Prophet (ﷺ) said: 'O people, I have left among you that which if you hold fast to it, you will never go astray: the Book of Allah and my Sunnah.' - Sunan al-Bayhaqi"
        },
        {
          heading: "The Final Words",
          text: "The Prophet (ﷺ) said: 'O people, I have left among you that which if you hold fast to it, you will never go astray: the Book of Allah and my Sunnah.' This emphasized the importance of the Quran and his example.",
          hadith: "The Prophet (ﷺ) said: 'I have left among you two things, you will never go astray if you hold fast to them: The Book of Allah and my Sunnah.' - Sunan al-Bayhaqi"
        }
      ]
    },
    12: {
      id: 12,
      title: "The Passing of the Prophet",
      subtitle: "632 CE",
      description: "After a brief illness, the Prophet Muhammad (ﷺ) passed away at the age of 63 in Medina.",
      details: [
        {
          heading: "The Final Illness",
          text: "The Prophet (ﷺ) fell ill in the house of his wife Maimunah. He asked permission from his wives to be nursed in Aisha's room. He continued to lead prayers until his final days.",
          quranRef: "3:144",
          quranText: "وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ",
          quranTranslation: "Muhammad is not but a messenger. Messengers have passed on before him."
        },
        {
          heading: "The Final Words",
          text: "The Prophet (ﷺ) said: 'O Allah, forgive me, have mercy on me, and join me with the highest companions.' His final words were: 'The prayer, the prayer! Fear Allah concerning those whom your right hands possess.'",
          hadith: "The Prophet (ﷺ) said: 'The prayer, the prayer! And fear Allah concerning those whom your right hands possess.' - Sunan Abu Dawud"
        },
        {
          heading: "The Burial",
          text: "The Prophet (ﷺ) was buried in the room of his wife Aisha (RA). His death was a profound loss, but his legacy continues through the Quran and his Sunnah.",
          hadith: "The Prophet (ﷺ) said: 'I am leaving you with the Book of Allah and my Sunnah.' - Sunan al-Bayhaqi"
        }
      ]
    }
  };

  const chapter = chapterData[id];

  if (!chapter) {
    return (
      <div className="prophet-chapter-page">
        <div className="container-premium">
          <Link to="/prophet" className="back-button-prophet">← Back to Prophet</Link>
          <div className="chapter-header-glass">
            <h1>Chapter not found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="prophet-chapter-page">
      <div className="container-premium">
        
        {/* Back Button */}
        <Link to="/prophet" className="back-button-prophet">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Prophet
        </Link>

        {/* Chapter Header */}
        <div className="chapter-header-glass">
          <h1 className="chapter-title-glass">{chapter.title}</h1>
          <p className="chapter-subtitle-glass">{chapter.subtitle}</p>
        </div>

        {/* Chapter Description */}
        <div className="chapter-description-glass">
          <p>{chapter.description}</p>
        </div>

        {/* Details */}
        <div className="chapter-details-glass">
          {chapter.details.map((detail, index) => (
            <div key={index} className="detail-card-glass">
              <h3 className="detail-heading-glass">{detail.heading}</h3>
              <p className="detail-text-glass">{detail.text}</p>
              
              {detail.quranRef && (
                <div className="detail-quran-glass">
                  <p className="quran-ref-glass">{detail.quranRef}</p>
                  <p className="quran-arabic-glass" dir="rtl">{detail.quranText}</p>
                  <p className="quran-translation-glass">"{detail.quranTranslation}"</p>
                </div>
              )}
              
              {detail.reference && (
                <p className="detail-reference-glass">📚 Reference: {detail.reference}</p>
              )}
              
              {detail.hadith && (
                <p className="detail-hadith-glass">📖 Hadith: {detail.hadith}</p>
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="chapter-nav-glass">
          {parseInt(id) > 1 && (
            <Link to={`/prophet-chapter/${parseInt(id) - 1}`} className="nav-btn-glass prev">
              ← Previous Chapter
            </Link>
          )}
          {parseInt(id) < 12 && (
            <Link to={`/prophet-chapter/${parseInt(id) + 1}`} className="nav-btn-glass next">
              Next Chapter →
            </Link>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProphetChapter;