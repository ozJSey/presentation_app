const subjects = [
  {
    "/welcome": {
      "Merhaba BAAL!": {
        subject: "Kim ki bu?",
        transition: "slideInLeft",
        texts: [
          {
            id: "asd1",
            message: "Özgür Seyidoğlu",
            visible: false,
            animation: "bounceInUp",
            image: {
              source: "/src/assets/whoami.png",
            },
          },
          {
            id: "asd2",
            message: "Yazılım Müdendisi, ama dahası var tabi...",
            visible: false,
            animation: "bounceInUp",
            image: {
              source: "/src/assets/lib.png",
            },
          },
          {
            id: "asd3",
            message:
              "Tam tanım: Sr. Web/Mobile Applications Frontend Development Engineer",
            visible: false,
            animation: "bounceInUp",
          },
        ],
      },
    },
  },
  {
    "/software": {
      "Yazılım nedİr tam olarak?": {
        subject: "Hardware/Software",
        transition: "slideInRight",
        texts: [
          {
            id: "asd99",
            message: "Bilgisayar nedir?",
            visible: false,
            animation: "fadeInUp",
            image: {
              source: "/src/assets/analyticalengine.jpeg",
            },
          },
          {
            id: "asd4",
            message: "Kime borcluyuz - Alan Turing",
            visible: false,
            animation: "fadeInUp",
            image: {
              source: "/src/assets/turing_machine.jpeg",
            },
          },
          {
            id: "asd48",
            message: "Yazılım nedir?",
            visible: false,
            animation: "fadeInUp",
          },
          {
            id: "asd48",
            message: "Yazılım dilleri ve kullanım alanları",
            visible: false,
            animation: "fadeInUp",
            image: {
              source: "/src/assets/softwarelanguages.jpeg",
            },
          },
          {
            id: "asd50",
            message: "Compiler, intrepeter, assembler nedir?",
            visible: false,
            animation: "fadeInUp",
          },
          {
            id: "asd49",
            message:
              "Mühendis ne iş yapar, geliştirici ne iş yapar? Bi de Hippi'ler var",
            visible: false,
            animation: "fadeInUp",
          },
          {
            id: "asd79",
            message: "Nefret de eder.",
            visible: false,
            animation: "fadeInUp",
          },
          {
            id: "asd80",
            message: "Nefret de eder.",
            visible: false,
            animation: "fadeInUp",
          },
          {
            id: "asd81",
            message: "Nefret de eder.",
            visible: false,
            animation: "fadeInUp",
          },
          {
            id: "asd81",
            message: "Nefret de eder.",
            visible: false,
            animation: "fadeInUp",
          },
        ],
      },
    },
  },
  {
    "/software-engineering": {
      "Yazılım Mühendİslİğİ": {
        subject: "Yazılım müdendisleri tam olarak ne yapabilir?",
        transition: "slideInDown",
        texts: [
          {
            id: "asd5",
            message: "Frontend Developer | Önyüz Yazılım Geliştirici",
            visible: false,
            animation: "rollIn",
          },
          {
            id: "asd6",
            message: "Backend Developer | Arkayüz Yazılım Geliştirici",
            visible: false,
            animation: "rollIn",
          },
          {
            id: "asd7",
            message: "Full-stack Software Developer | Tam Türkçe'si maalesef",
            visible: false,
            animation: "rollIn",
          },
          {
            id: "asd8",
            message:
              "Security Software Developer | Güvenlik Yazılımı Geliştirici",
            visible: false,
            animation: "rollIn",
          },
          {
            id: "asd9",
            message: "Cyber Security | Siber Güvenlik Uzmanı",
            visible: false,
            animation: "rollIn",
          },
          {
            id: "asd10",
            message: "AI Developer | Yapay Zeka Geliştirici",
            visible: false,
            animation: "rollIn",
          },
          {
            id: "asd11",
            message: "Game Developer | Oyun Yazılımı Geliştirici",
            visible: false,
            animation: "rollIn",
          },
          {
            id: "asd12",
            message: "Embedded Software Engineer | Gömülü Yazılım Geliştirici",
            visible: false,
            animation: "rollIn",
          },
          {
            id: "asd14",
            message:
              "Desktop Software Engineer | Bilgisayar Yazılımı Geliştirici",
            visible: false,
            animation: "rollIn",
          },
          {
            id: "asd15",
            message: "Cloud Computing | Bulut Yazılımı Geliştirici",
            visible: false,
            animation: "rollIn",
          },
          {
            id: "asd16",
            message: "DevOps Engineering | Tam Türkçesi yine yok (:",
            visible: false,
            animation: "rollIn",
          },
          {
            id: "asd17",
            message: "SEO | Arama Motoru Optimizasyonu",
            visible: false,
            animation: "rollIn",
          },
        ],
      },
    },
  },
  {
    "/where-to-start": {
      "Nereden başlamalıyım": {
        subject: "Her hikayenin bir girişi var tabi!",
        transition: "slideInUp",
        texts: [
          {
            id: "asd30",
            message: "İngilizce",
            visible: false,
            animation: "rotateInDownLeft",
          },
          {
            id: "asd30",
            message: "Klavye dahil!",
            visible: false,
            animation: "rotateInDownLeft",
          },
          {
            id: "asd31",
            message: "Üniversite",
            visible: false,
            animation: "rotateInDownLeft",
          },
          {
            id: "asd32",
            message: "Tercih",
            visible: false,
            animation: "rotateInDownLeft",
          },
          {
            id: "asd32",
            message: "Gerisi gelir ama akmasını bilicen.",
            visible: false,
            animation: "rotateInDownLeft",
          },
          {
            id: "asd32",
            message: "Hardware muhtaçlığı bizi havalı gösteriyor.",
            visible: false,
            animation: "rotateInDownLeft",
            image: {
              style: "blur",
              source: "/src/assets/parasi.jpeg",
            },
          },
          {
            id: "asd32",
            message: "Limitlere!",
            visible: false,
            animation: "rotateInDownLeft",
            image: {
              source: "/src/assets/bcsno.jpeg",
            },
          },
        ],
      },
    },
  },
  {
    "/why-to-start": {
      "Neden Başlamalıyım?": {
        subject: "Bir nedeni olmalı değil mi?",
        transition: "zoomInDown",
        texts: [
          {
            id: "asd30",
            message: "Software Memes",
            visible: false,
            animation: "rotateIn",
            image: {
              source: "/src/assets/meme.jpeg",
            },
          },
          {
            id: "asd31",
            message: "Parası?",
            visible: false,
            animation: "rotateIn",
            image: {
              source: "/src/assets/money.png",
            },
          },
          {
            id: "asd32",
            message: "Esas Nedenler",
            visible: false,
            animation: "rotateIn",
          },
        ],
      },
    },
  },
  {
    "/education": {
      "Eğİtİm kısmı": {
        subject: "Neyin ne olduğunu bilmelisiniz!",
        transition: "fadeInRightBig",
        texts: [
          {
            id: "asd30",
            message: "Üniversite",
            visible: false,
            animation: "zoomInLeft",
          },
          {
            id: "asd49",
            message: "Mühendislik hakları belli başlı avantajları",
            visible: false,
            animation: "fadeInUp",
          },
          {
            id: "asd31",
            message: "Kendi kendine",
            visible: false,
            animation: "zoomInLeft",
          },
          {
            id: "asd48",
            message: "İyi yazılımcıları taklit edin.",
            visible: false,
            animation: "zoomInLeft",
          },
          {
            id: "asd32",
            message: "Bitmiyor...",
            visible: false,
            animation: "zoomInLeft",
            image: {
              source: "/src/assets/coffee.jpeg",
            },
          },
        ],
      },
    },
  },
  {
    "/companies": {
      Şİrketler: {
        subject: "Şirketler ne yapıyor?",
        transition: "fadeInLeftBig",
        texts: [
          {
            id: "asd19",
            message: "Software company | Yazılım Şirketi",
            visible: false,
            animation: "flipInY",
          },
          {
            id: "asd20",
            message: "Product company | Ürün Odaklı Şirketler",
            visible: false,
            animation: "flipInY",
          },
          {
            id: "asd21",
            message: "Infrastruction company | Altyapı Şirketi",
            visible: false,
            animation: "flipInY",
          },

          {
            id: "asd22",
            message: "Startups | Girişimler",
            visible: false,
            animation: "flipInY",
          },
          {
            id: "asd23",
            message: "Software Agency | Yazılım Ajansı",
            visible: false,
            animation: "flipInY",
          },
          {
            id: "asd24",
            message: "IT Company | Bilgi Teknolojileri Şirketi",
            visible: false,
            animation: "flipInY",
          },
          {
            id: "asd25",
            message: "Cyber Security | Siber Güvenlik Şirketleri",
            visible: false,
            animation: "flipInY",
          },
          {
            id: "asd26",
            message: "Hackers | TCK 243",
            visible: false,
            animation: "flipInY",
          },
          {
            id: "asd27",
            message:
              "Advertisement Software Agency | Online Reklamcılık Ajansı",
            visible: false,
            animation: "flipInY",
          },
          {
            id: "asd28",
            message: "E-Commerce | E-ticaret",
            visible: false,
            animation: "flipInY",
          },
          {
            id: "asd29",
            message: "Diğerleri",
            visible: false,
            animation: "flipInY",
          },
          {
            id: "as18",
            message: "Yazılımcası: IaaS vs PaaS vs SaaS",
            visible: false,
            animation: "flipInY",
            image: {
              source: "/src/assets/iaaspaassaas.jpeg",
            },
          },
        ],
      },
    },
  },
  {
    "/finding-jobs": {
      "İş İmkanları": {
        subject: "Sanırım, Daha iyisi yok!",
        transition: "fadeInDownBig",
        texts: [
          {
            id: "asd33",
            message: "İlk iş",
            visible: false,
            animation: "zoomInRight",
          },
          {
            id: "asd31",
            message: "Maaş durumu",
            visible: false,
            animation: "zoomInRight",
            image: {
              source: "/src/assets/rich.jpeg",
            },
          },
          {
            id: "asd71",
            message: "Haketmeyen olduğunda seçenekleriniz var! Anti-hero ol!",
            visible: false,
            animation: "zoomInRight",
            image: {
              source: "/src/assets/diggin.jpeg",
            },
          },
          {
            id: "asd32",
            message: "Fake it till you make it, especially to HR's",
            visible: false,
            animation: "zoomInRight",
          },
          {
            id: "asd62",
            message: "Yurtdışı",
            visible: false,
            animation: "zoomInRight",
          },
          {
            id: "asd32",
            message: "Oldum dedikten sonra...",
            visible: false,
            animation: "zoomInRight",
          },
        ],
      },
    },
  },
  {
    "/working-conditions-and-office-environment": {
      "Çalışma Sartları ve ofis ortamı": {
        subject: "Çoğu şirkette aynı şeyle karşılaşıcaksınız",
        transition: "fadeInUpBig",
        texts: [
          {
            id: "asd31",
            message: "Hiyerarşi",
            visible: false,
            animation: "bounceInDown",
          },
          {
            id: "asd32",
            message: "Yoğunluk",
            visible: false,
            animation: "bounceInDown",
          },
          {
            id: "asd62",
            message: "Tech-stack, tooling, JR-Mid-SR",
            visible: false,
            animation: "bounceInDown",
          },
          {
            id: "asd32",
            message: "Beklentiler",
            visible: false,
            animation: "bounceInDown",
            image: {
              source: "/src/assets/zaman.jpeg",
            },
          },
          {
            id: "asd32",
            message: "Sunulanlar",
            visible: false,
            animation: "bounceInDown",
          },
          {
            id: "asd32",
            message: "Remote Hybrid On-site",
            visible: false,
            animation: "bounceInDown",
          },
          {
            id: "asd32",
            message: "Çalışma Vizesi",
            visible: false,
            animation: "bounceInDown",
          },
          {
            id: "asd32",
            message: "Stres",
            visible: false,
            animation: "bounceInDown",
          },
          {
            id: "asd33",
            message:
              "Önerilerim: yıllar ve emek, boşver gitsin, knowledge-bias, kullanıcı aptaldır...",
            visible: false,
            animation: "bounceInDown",
          },
        ],
      },
    },
  },
  {
    "/short-notes": {
      "Bİlale Anlatır Gİbİ, umarım ": {
        subject: "Bazı genel geçer terimler",
        transition: "zoomInDown",
        texts: [
          {
            id: "asd60",
            message: "Algoritma",
            visible: false,
            animation: "fadeInLeft",
            image: {
              source: "/src/assets/algoritma.jpeg",
            },
          },
          {
            id: "asd33",
            message: "Big Data/Cloud",
            visible: false,
            animation: "fadeInLeft",
          },
          {
            id: "asd34",
            message: "Intranet/Internet, Browser",
            visible: false,
            animation: "fadeInLeft",
          },
          {
            id: "asd34",
            message: "Web1/Web2/Web3",
            visible: false,
            animation: "fadeInLeft",
          },
          {
            id: "asd59",
            message: "Blockchain",
            visible: false,
            animation: "fadeInLeft",
          },
          {
            id: "asd36",
            message: "Cryptocurrency",
            visible: false,
            animation: "fadeInLeft",
          },
          {
            id: "asd37",
            message: "AR/Metaverse",
            visible: false,
            animation: "fadeInLeft",
          },
          {
            id: "asd38",
            message: "NFT",
            visible: false,
            animation: "fadeInLeft",
          },
          {
            id: "asd38",
            message: "Version Control/GIT",
            visible: false,
            animation: "fadeInLeft",
          },
          {
            id: "asd39",
            message: "Bilgisayar çalışma prensibi ve kodun nasıl işlendiği",
            visible: false,
            animation: "fadeInLeft",
          },
          {
            id: "asd40",
            message: "Quantum Computing",
            visible: false,
            animation: "fadeInLeft",
          },
          {
            id: "asd41",
            message: "Documentation",
            visible: false,
            animation: "fadeInLeft",
          },
          {
            id: "asd42",
            message: "IDE",
            visible: false,
            animation: "fadeInLeft",
          },
          {
            id: "asd72",
            message:
              "Biraz da güvenlik, crypting, encryption, decrpytion, public/private key, social engineering",
            visible: false,
            animation: "fadeInLeft",
          },
        ],
      },
    },
  },
  {
    "/wish-i-knew": {
      "Benİm takıldığım yerler ve paylaşmak İstedİğİm bİr kaç bİr şey": {
        subject: "Tecrübelerimden bilginize arz.",
        transition: "zoomInDown",
        texts: [
          {
            id: "asd43",
            message: "Tabağınızdakini bitirin önce!",
            visible: false,
            animation: "bounceIn",
          },
          {
            id: "asd44",
            message: "Gereksiz stres",
            visible: false,
            animation: "bounceIn",
          },
          {
            id: "asd45",
            message: "Kendinizden harcamayın",
            visible: false,
            animation: "bounceIn",
          },
          {
            id: "asd75",
            message: "Influencerlara inanmayın!",
            visible: false,
            animation: "bounceIn",
            image: {
              source: "/src/assets/googleap.jpeg",
            },
          },
          {
            id: "asd46",
            message:
              "Daha iyisi var tabi: dengesini kurmak ve belli bir yere odaklanmak",
            visible: false,
            animation: "bounceIn",
          },
          {
            id: "asd46",
            message: "Çekişmeler",
            visible: false,
            animation: "bounceIn",
          },
          {
            id: "asd47",
            message: "Yazılımla ilgili diğer herşeyin önemi",
            visible: false,
            animation: "bounceIn",
          },
          {
            id: "asd55",
            message: "Bilmediğiniz toollar ve bilgisayarların aptallığı",
            visible: false,
            animation: "bounceIn",
          },
        ],
      },
    },
  },
  {
    "/questions": {
      Sorular: {
        style: "center",
        subject: "Aklınıza hala takılan bir şey varsa!",
        transition: "zoomInUp",
      },
    },
  },
];

export default subjects;
