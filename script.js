const yearNode = document.getElementById('year');
const langBtns = document.querySelectorAll('.lang-btn');
const roadDecoration = document.querySelector('.road-decoration');
const roadExits = document.querySelectorAll('.road-decoration .road-exit');
const roadCar = document.querySelector('.road-car');
const rightLaneTraffic = document.querySelector('.right-lane-traffic');
const HEADER_HEIGHT = 72;
const DEFAULT_LANG = 'ru';
const LANGUAGE_STORAGE_KEY = 'selectedLang';
const RIGHT_LANE_MIN_DELAY = 1500;
const RIGHT_LANE_MAX_DELAY = 7500;
const RIGHT_LANE_TRAVEL_MS = 15000;
const RIGHT_LANE_CAR_SOURCES = [
  'assets/police-1.png',
  'assets/prius-blue-1.png',
  'assets/skoda-scala-1.png',
  'assets/sprinter-grey-1.png'
];
const translations = {
  ru: {
    'page.title': 'Auto City — Школа вождения',
    'page.description': 'Веб-страницы для школы вождения',
    'home.eyebrow': 'О нас',
    'home.title': 'AutoCity - Автошкола с современным подходом к обучению водителей',
    'home.lead': 'Здесь будет общее описание автошколы: ценности, формат обучения, длительность курсов, индивидуальный подход и преимущества для будущих водителей.',
    'home.about.title': 'Общее описание автошколы',
    'home.about.p1': 'Плейсхолдер для краткой презентации автошколы. Добавьте сюда информацию о лицензии, опыте работы, методике обучения и результатах учеников.',
    'home.about.p2': 'Здесь можно рассказать о гибком расписании занятий, поддержке на всех этапах подготовки и помощи при сдаче экзаменов.',
    'home.why.title': 'Почему выбирают нас',
    'home.why.item1': 'Плейсхолдер для преимущества №1',
    'home.why.item2': 'Плейсхолдер для преимущества №2',
    'home.why.item3': 'Плейсхолдер для преимущества №3',
    'home.why.item4': 'Плейсхолдер для преимущества №4',
    'teachers.title': 'Преподаватели',
    'teachers.lead': 'Плейсхолдеры для описания инструкторов и преподавателей теории. Здесь можно разместить опыт, специализацию и подход каждого преподавателя.',
    'cars.title': 'Автомобили для обучения',
    'cars.lead': 'Плейсхолдеры для описания учебных автомобилей: тип коробки передач, состояние машин, оснащение и удобство для начинающих водителей.',
    'theory.eyebrow': 'Теория',
    'theory.title': 'Подготовка к теоретическому экзамену',
    'theory.lead': 'Плейсхолдер для описания теоретических занятий: программа курса, разбор билетов, изучение ПДД, поддержка преподавателя и подготовка к экзамену.',
    'theory.p2': 'Добавьте здесь информацию о длительности курса, формате занятий, доступе к учебным материалам и тренировочным тестам.',
    'practice.eyebrow': 'Практика',
    'practice.title': 'Подготовка к практическому экзамену',
    'practice.lead': 'Плейсхолдер для описания практических занятий: выезд в город, отработка манёвров, парковка, экзаменационные маршруты и сопровождение инструктора.',
    'footer.up': 'Наверх',
    'road.about': 'О нас',
    'road.about.aria': 'Перейти к разделу О нас',
    'road.theory': 'Теория',
    'road.theory.aria': 'Перейти к разделу Теория',
    'road.practice': 'Практика',
    'road.practice.aria': 'Перейти к разделу Практика'
  },
  ka: {
    'page.title': 'Auto City — მართვის სკოლა',
    'page.description': 'ვებ-გვერდები ავტოსკოლისთვის',
    'home.eyebrow': 'ჩვენ შესახებ',
    'home.title': 'AutoCity - ავტოსკოლა მძღოლების მომზადების თანამედროვე მიდგომით',
    'home.lead': 'აქ განთავსდება ავტოსკოლის ზოგადი აღწერა: ღირებულებები, სწავლების ფორმატი, კურსების ხანგრძლივობა, ინდივიდუალური მიდგომა და მომავალი მძღოლებისთვის უპირატესობები.',
    'home.about.title': 'ავტოსკოლის ზოგადი აღწერა',
    'home.about.p1': 'პლეისჰოლდერი ავტოსკოლის მოკლე პრეზენტაციისთვის. აქ დაამატეთ ინფორმაცია ლიცენზიის, გამოცდილების, სწავლების მეთოდიკისა და მოსწავლეების შედეგების შესახებ.',
    'home.about.p2': 'აქ შეგიძლიათ აღწეროთ მოქნილი განრიგი, მხარდაჭერა ყველა ეტაპზე და დახმარება გამოცდების ჩაბარებისას.',
    'home.why.title': 'რატომ გვირჩევენ ჩვენ',
    'home.why.item1': 'პლეისჰოლდერი უპირატესობისთვის №1',
    'home.why.item2': 'პლეისჰოლდერი უპირატესობისთვის №2',
    'home.why.item3': 'პლეისჰოლდერი უპირატესობისთვის №3',
    'home.why.item4': 'პლეისჰოლდერი უპირატესობისთვის №4',
    'teachers.title': 'ინსტრუქტორები',
    'teachers.lead': 'პლეისჰოლდერები თეორიის მასწავლებლებისა და ინსტრუქტორების აღწერისთვის. აქ შეიძლება განთავსდეს გამოცდილება, სპეციალიზაცია და თითოეულის მიდგომა.',
    'cars.title': 'სასწავლო ავტომობილები',
    'cars.lead': 'პლეისჰოლდერები სასწავლო მანქანების აღწერისთვის: გადაცემათა კოლოფის ტიპი, მდგომარეობა, აღჭურვილობა და კომფორტი დამწყებთათვის.',
    'theory.eyebrow': 'თეორია',
    'theory.title': 'თეორიული გამოცდისთვის მომზადება',
    'theory.lead': 'პლეისჰოლდერი თეორიული გაკვეთილების აღწერისთვის: კურსის პროგრამა, ბილეთების განხილვა, მოძრაობის წესები, მასწავლებლის მხარდაჭერა და გამოცდისთვის მომზადება.',
    'theory.p2': 'აქ დაამატეთ ინფორმაცია კურსის ხანგრძლივობაზე, გაკვეთილების ფორმატზე, სასწავლო მასალებსა და სავარჯიშო ტესტებზე.',
    'practice.eyebrow': 'პრაქტიკა',
    'practice.title': 'პრაქტიკული გამოცდისთვის მომზადება',
    'practice.lead': 'პლეისჰოლდერი პრაქტიკული გაკვეთილების აღწერისთვის: ქალაქში გასვლა, მანევრების დამუშავება, პარკირება, საგამოცდო მარშრუტები და ინსტრუქტორის მხარდაჭერა.',
    'footer.up': 'ზემოთ',
    'road.about': 'ჩვენ შესახებ',
    'road.about.aria': 'გადასვლა სექციაზე ჩვენ შესახებ',
    'road.theory': 'თეორია',
    'road.theory.aria': 'გადასვლა სექციაზე თეორია',
    'road.practice': 'პრაქტიკა',
    'road.practice.aria': 'გადასვლა სექციაზე პრაქტიკა'
  }
};
let rightLaneTrafficStarted = false;
let lastRightLaneCarSrc = '';

function updateRoadCarPosition() {
  if (!roadCar) {
    return;
  }

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;
  const carHeight = roadCar.getBoundingClientRect().height;
  const maxTravel = Math.max(window.innerHeight - HEADER_HEIGHT - carHeight - 12, 0);
  const carY = 12 + maxTravel * progress;

  document.documentElement.style.setProperty('--road-car-y', `${carY}px`);
}

// Update road height dynamically when window resizes
const updateRoadHeight = () => {
  if (roadDecoration) {
    const newHeight = window.innerHeight - HEADER_HEIGHT;
    roadDecoration.style.height = newHeight + 'px';

    // Compensate non-uniform SVG scaling: exits keep road-like thickness on any screen width.
    const box = roadDecoration.getBoundingClientRect();
    const viewBox = roadDecoration.viewBox.baseVal;

    if (viewBox.width > 0 && viewBox.height > 0 && box.width > 0 && box.height > 0) {
      const scaleX = box.width / viewBox.width;
      const scaleY = box.height / viewBox.height;
      const exitScaleY = scaleX / scaleY;

      roadExits.forEach((roadExit) => {
        roadExit.style.transform = `scaleY(${exitScaleY})`;
      });
    }
  }

  updateRoadCarPosition();
};

if (roadDecoration) {
  updateRoadHeight();
  window.addEventListener('resize', updateRoadHeight);
}

if (roadCar) {
  updateRoadCarPosition();
  window.addEventListener('scroll', updateRoadCarPosition, { passive: true });
}

function getRandomRightLaneCarSrc() {
  if (RIGHT_LANE_CAR_SOURCES.length <= 1) {
    return RIGHT_LANE_CAR_SOURCES[0] || '';
  }

  const availableSources = RIGHT_LANE_CAR_SOURCES.filter((src) => src !== lastRightLaneCarSrc);
  const nextCarSrc = availableSources[Math.floor(Math.random() * availableSources.length)];

  lastRightLaneCarSrc = nextCarSrc;
  return nextCarSrc;
}

function spawnRightLaneCar() {
  if (!rightLaneTraffic) {
    return;
  }

  const car = document.createElement('img');
  car.className = 'right-lane-car right-lane-car--moving';
  car.src = getRandomRightLaneCarSrc();
  car.alt = '';
  car.setAttribute('aria-hidden', 'true');

  const removeCar = () => {
    car.remove();
  };

  // Remove node on animation completion and keep timeout as a safety net.
  car.addEventListener('animationend', removeCar, { once: true });
  window.setTimeout(removeCar, RIGHT_LANE_TRAVEL_MS + 300);
  rightLaneTraffic.appendChild(car);
}

function getRandomRightLaneDelay() {
  return Math.floor(Math.random() * (RIGHT_LANE_MAX_DELAY - RIGHT_LANE_MIN_DELAY + 1)) + RIGHT_LANE_MIN_DELAY;
}

function scheduleRightLaneSpawn() {
  window.setTimeout(() => {
    spawnRightLaneCar();
    scheduleRightLaneSpawn();
  }, getRandomRightLaneDelay());
}

function startRightLaneTraffic() {
  if (rightLaneTrafficStarted || !rightLaneTraffic) {
    return;
  }

  rightLaneTrafficStarted = true;
  spawnRightLaneCar();
  scheduleRightLaneSpawn();
}

function handleStartRightLaneTrafficOnScroll() {
  if (window.scrollY <= 0) {
    return;
  }

  startRightLaneTraffic();
  window.removeEventListener('scroll', handleStartRightLaneTrafficOnScroll);
}

window.addEventListener('scroll', handleStartRightLaneTrafficOnScroll, { passive: true });

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

function applyTranslations(lang) {
  const fallbackDictionary = translations.ru;
  const dictionary = translations[lang] || fallbackDictionary;
  const translatableNodes = document.querySelectorAll('[data-i18n]');

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = dictionary[key] || fallbackDictionary[key];

    if (!value) {
      return;
    }

    const attr = node.dataset.i18nAttr;

    if (attr) {
      node.setAttribute(attr, value);
    } else {
      node.textContent = value;
    }

    const ariaKey = node.dataset.i18nAria;

    if (ariaKey) {
      const ariaValue = dictionary[ariaKey] || fallbackDictionary[ariaKey];

      if (ariaValue) {
        node.setAttribute('aria-label', ariaValue);
      }
    }
  });
}

function setActiveLanguage(lang) {
  const normalizedLang = Object.prototype.hasOwnProperty.call(translations, lang) ? lang : DEFAULT_LANG;

  document.documentElement.lang = normalizedLang;
  applyTranslations(normalizedLang);

  langBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === normalizedLang);
  });
}

let savedLang;

try {
  savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) || DEFAULT_LANG;
} catch (error) {
  savedLang = DEFAULT_LANG;
}

setActiveLanguage(savedLang);

langBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
	const lang = btn.dataset.lang;

	if (!lang) {
	  return;
	}

	setActiveLanguage(lang);

	try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
	} catch (error) {
	  // Ignore storage issues in restricted environments.
	}
  });
});

if (!document.querySelector('.lang-btn.active')) {
  setActiveLanguage(DEFAULT_LANG);
}

