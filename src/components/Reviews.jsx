import React, { useEffect, useMemo, useState } from 'react';
import './Reviews.css';

const content = {
  ru: {
    title: 'Отзывы',
    subtitle: 'Что говорят о моих проектах, интерфейсах и подходе к разработке.',
    eyebrow: 'Feedback',
    avg: 'Средняя оценка',
    total: 'отзывов',
    formTitle: 'Оставить отзыв',
    formText: 'Поделитесь впечатлением о сайте, проекте или интерфейсе.',
    namePlaceholder: 'Ваше имя *',
    textPlaceholder: 'Напишите отзыв *',
    button: 'Добавить отзыв',
    clear: 'Очистить мои локальные отзывы',
    note: 'Сейчас отзывы и скриншоты сохраняются локально в вашем браузере. Для публичных отзывов позже подключим базу данных.',
    ratingLabel: 'Оценка',
    screenshotLabel: 'Скриншоты проекта',
    screenshotHint: 'Можно прикрепить до 3 изображений. Необязательно.',
    screenshotButton: 'Прикрепить скриншоты',
    removeImage: 'Удалить',
    requiredName: 'Введите имя.',
    requiredText: 'Введите текст отзыва.',
    tooManyImages: 'Можно прикрепить максимум 3 скриншота.',
    fileTooLarge: 'Файл слишком большой. Максимум 1 MB на изображение.',
    defaultAuthor: 'Гость',
    newRole: 'Новый отзыв',
    items: [
      {
            "text": "Заказывал сайт Fagot как клиентский проект. Получился аккуратный, спокойный и понятный сайт: структура читается легко, блоки не перегружены, а общий вид вызывает доверие.",
            "author": "Fagot client project",
            "role": "Заказной сайт",
            "rating": 5,
            "images": []
      },
      {
            "text": "Портфолио стало заметно удобнее: проекты разделены по фильтрам, карточки выглядят аккуратно, а навигация стала понятной с первого взгляда.",
            "author": "Portfolio feedback",
            "role": "UI review",
            "rating": 5,
            "images": []
      },
      {
            "text": "React Pizza хорошо показывает работу с каталогом, фильтрацией, корзиной и состояниями интерфейса. Для учебного e-commerce проекта выглядит убедительно.",
            "author": "React Pizza review",
            "role": "E-commerce project",
            "rating": 5,
            "images": []
      },
      {
            "text": "React Sneakers воспринимается как полноценный интернет-магазин: избранное, корзина, заказы и карточки товаров собраны в понятный пользовательский сценарий.",
            "author": "React Sneakers feedback",
            "role": "Store interface",
            "rating": 5,
            "images": []
      },
      {
            "text": "FarmVest смотрится как сильный лендинг: приятный первый экран, чистая сетка и хороший баланс между текстом, формой и визуальными элементами.",
            "author": "Landing review",
            "role": "FarmVest project",
            "rating": 5,
            "images": []
      },
      {
            "text": "Eragon Exchange запоминается атмосферой. Видно, что это не просто лендинг, а концепт с характером, визуальным направлением и идеей бренда.",
            "author": "Concept feedback",
            "role": "Eragon Exchange",
            "rating": 5,
            "images": []
      },
      {
            "text": "Spring Greeting Site выглядит лёгким и тёплым. Хороший пример небольшого эмоционального сайта, который не перегружен лишними деталями.",
            "author": "Microsite review",
            "role": "Greeting project",
            "rating": 5,
            "images": []
      },
      {
            "text": "Birthday Greeting Site показывает, что можно быстро собрать персональный сайт-поздравление с приятной подачей и адаптивной структурой.",
            "author": "Personal site feedback",
            "role": "Greeting site",
            "rating": 4,
            "images": []
      },
      {
            "text": "BARBER Landing выглядит современно и понятно: такой сайт хорошо подходит для записи клиентов и быстрой презентации услуг.",
            "author": "Service landing review",
            "role": "Barbershop concept",
            "rating": 5,
            "images": []
      },
      {
            "text": "Library Landing понравился спокойной подачей. Есть ощущение городского пространства, а не просто набора секций.",
            "author": "Editorial UI feedback",
            "role": "Library landing",
            "rating": 5,
            "images": []
      },
      {
            "text": "VitaPulse Clinic смотрится аккуратно для медицинской тематики: спокойный стиль, понятные блоки и ощущение профессиональности.",
            "author": "Clinic website review",
            "role": "Medical UI",
            "rating": 5,
            "images": []
      },
      {
            "text": "Tzeezotje Restaurant хорошо передаёт атмосферу ресторана. Такой проект полезен в портфолио, потому что показывает работу с визуальной подачей бизнеса.",
            "author": "Restaurant UI review",
            "role": "Landing page",
            "rating": 4,
            "images": []
      },
      {
            "text": "Biysk выглядит как классический промо-лендинг с акцентом на визуал и первый экран. Хороший пример работы с HTML, SCSS и анимациями.",
            "author": "Promo landing feedback",
            "role": "Biysk project",
            "rating": 4,
            "images": []
      },
      {
            "text": "Britlex аккуратно показывает структуру образовательного лендинга: hero, смысловые блоки и простая подача без визуального шума.",
            "author": "Education landing review",
            "role": "Britlex project",
            "rating": 4,
            "images": []
      },
      {
            "text": "Quiz — небольшой, но полезный проект. Хорошо показывает базовую интерактивность, работу с состояниями и пользовательским выбором.",
            "author": "Mini project review",
            "role": "Quiz app",
            "rating": 4,
            "images": []
      },
      {
            "text": "Modal — простой проект, но он демонстрирует важную механику интерфейса: открытие, закрытие и контроль состояния модального окна.",
            "author": "UI mechanics feedback",
            "role": "Modal component",
            "rating": 4,
            "images": []
      },
      {
            "text": "Counter выглядит минимально, зато хорошо показывает базовую логику React и работу с изменением состояния.",
            "author": "React basics review",
            "role": "Counter app",
            "rating": 4,
            "images": []
      },
      {
            "text": "Users — хороший мини-проект для демонстрации работы со списками, поиском или данными пользователей. Полезно держать его в разделе мини-проектов.",
            "author": "Data UI feedback",
            "role": "Users app",
            "rating": 4,
            "images": []
      },
      {
            "text": "Currency Converter показывает работу с API и конвертацией данных. Это хороший небольшой проект для демонстрации практической логики.",
            "author": "API project review",
            "role": "Currency converter",
            "rating": 4,
            "images": []
      },
      {
            "text": "В целом портфолио стало выглядеть собраннее: есть проекты, отзывы, контакты, языки, темы и понятная структура. Это уже похоже на живую витрину работ.",
            "author": "General portfolio review",
            "role": "Overall feedback",
            "rating": 5,
            "images": []
      }
],
  },
  en: {
    title: 'Reviews',
    subtitle: 'What people say about my projects, interfaces and development approach.',
    eyebrow: 'Feedback',
    avg: 'Average rating',
    total: 'reviews',
    formTitle: 'Leave a review',
    formText: 'Share your impression about the website, project or interface.',
    namePlaceholder: 'Your name *',
    textPlaceholder: 'Write your review *',
    button: 'Add review',
    clear: 'Clear my local reviews',
    note: 'For now reviews and screenshots are saved locally in your browser. Public reviews can be connected to a database later.',
    ratingLabel: 'Rating',
    screenshotLabel: 'Project screenshots',
    screenshotHint: 'You can attach up to 3 images. Optional.',
    screenshotButton: 'Attach screenshots',
    removeImage: 'Remove',
    requiredName: 'Please enter your name.',
    requiredText: 'Please enter review text.',
    tooManyImages: 'You can attach up to 3 screenshots.',
    fileTooLarge: 'File is too large. Maximum 1 MB per image.',
    defaultAuthor: 'Guest',
    newRole: 'New review',
    items: [
      {
            "text": "Fagot was built as a client project. The website feels clean, calm and clear: the structure is easy to read, the sections are not overloaded, and the overall look feels trustworthy.",
            "author": "Fagot client project",
            "role": "Client website",
            "rating": 5,
            "images": []
      },
      {
            "text": "The portfolio became much easier to use: projects are grouped with filters, cards look clean, and navigation is clear from the first visit.",
            "author": "Portfolio feedback",
            "role": "UI review",
            "rating": 5,
            "images": []
      },
      {
            "text": "React Pizza demonstrates catalog logic, filtering, cart behavior and interface states well. For an e-commerce learning project, it feels convincing.",
            "author": "React Pizza review",
            "role": "E-commerce project",
            "rating": 5,
            "images": []
      },
      {
            "text": "React Sneakers feels like a complete online store: favorites, cart, orders and product cards form a clear user flow.",
            "author": "React Sneakers feedback",
            "role": "Store interface",
            "rating": 5,
            "images": []
      },
      {
            "text": "FarmVest works well as a landing page: a strong hero section, clean grid and good balance between text, form and visuals.",
            "author": "Landing review",
            "role": "FarmVest project",
            "rating": 5,
            "images": []
      },
      {
            "text": "Eragon Exchange is memorable because of its atmosphere. It feels less like a generic landing page and more like a branded concept with character.",
            "author": "Concept feedback",
            "role": "Eragon Exchange",
            "rating": 5,
            "images": []
      },
      {
            "text": "Spring Greeting Site feels light and warm. It is a good example of a small emotional website that is not overloaded with details.",
            "author": "Microsite review",
            "role": "Greeting project",
            "rating": 5,
            "images": []
      },
      {
            "text": "Birthday Greeting Site shows how a personal greeting page can be built quickly with a pleasant layout and responsive structure.",
            "author": "Personal site feedback",
            "role": "Greeting site",
            "rating": 4,
            "images": []
      },
      {
            "text": "BARBER Landing looks modern and clear. It fits the goal of presenting services and leading users toward booking or contact.",
            "author": "Service landing review",
            "role": "Barbershop concept",
            "rating": 5,
            "images": []
      },
      {
            "text": "Library Landing has a calm editorial feel. It gives the impression of a real city space rather than just a set of sections.",
            "author": "Editorial UI feedback",
            "role": "Library landing",
            "rating": 5,
            "images": []
      },
      {
            "text": "VitaPulse Clinic feels appropriate for a medical website: calm style, clear sections and a professional visual tone.",
            "author": "Clinic website review",
            "role": "Medical UI",
            "rating": 5,
            "images": []
      },
      {
            "text": "Tzeezotje Restaurant communicates the restaurant atmosphere well. It is useful in the portfolio because it shows business-oriented visual presentation.",
            "author": "Restaurant UI review",
            "role": "Landing page",
            "rating": 4,
            "images": []
      },
      {
            "text": "Biysk feels like a classic promotional landing page with a focus on visual impact and the first screen. A good HTML, SCSS and animation example.",
            "author": "Promo landing feedback",
            "role": "Biysk project",
            "rating": 4,
            "images": []
      },
      {
            "text": "Britlex presents an educational landing structure clearly: hero, content sections and simple communication without visual noise.",
            "author": "Education landing review",
            "role": "Britlex project",
            "rating": 4,
            "images": []
      },
      {
            "text": "Quiz is small but useful. It shows basic interactivity, state handling and user choice logic.",
            "author": "Mini project review",
            "role": "Quiz app",
            "rating": 4,
            "images": []
      },
      {
            "text": "Modal is a simple project, but it demonstrates an important interface pattern: opening, closing and controlling modal state.",
            "author": "UI mechanics feedback",
            "role": "Modal component",
            "rating": 4,
            "images": []
      },
      {
            "text": "Counter is minimal, but it clearly shows basic React logic and state updates.",
            "author": "React basics review",
            "role": "Counter app",
            "rating": 4,
            "images": []
      },
      {
            "text": "Users is a useful mini project for showing work with lists, search or user data. It fits well into the mini projects section.",
            "author": "Data UI feedback",
            "role": "Users app",
            "rating": 4,
            "images": []
      },
      {
            "text": "Currency Converter demonstrates API usage and data conversion logic. It is a practical small project for the portfolio.",
            "author": "API project review",
            "role": "Currency converter",
            "rating": 4,
            "images": []
      },
      {
            "text": "Overall, the portfolio feels more complete now: projects, reviews, contacts, languages, themes and a clear structure. It looks like a real showcase of work.",
            "author": "General portfolio review",
            "role": "Overall feedback",
            "rating": 5,
            "images": []
      }
],
  },
};

const storageKey = 'kenform_portfolio_reviews_v2';
const maxImages = 3;
const maxImageSize = 1024 * 1024;

function Stars({ value = 5, interactive = false, onChange }) {
  return (
    <div className="review-stars" aria-label={`${value} stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={star <= value ? 'star active' : 'star'}
          onClick={() => interactive && onChange?.(star)}
          disabled={!interactive}
          aria-label={`${star} stars`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function getInitials(name) {
  return (name || 'K')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function Reviews({ language = 'ru' }) {
  const lang = language === 'ru' ? 'ru' : 'en';
  const t = content[lang];

  const [savedReviews, setSavedReviews] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      localStorage.removeItem('kenform_portfolio_reviews');
      const raw = localStorage.getItem(storageKey);
      if (raw) setSavedReviews(JSON.parse(raw));
    } catch {
      setSavedReviews([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(savedReviews));
    } catch {
      // ignore storage quota errors
    }
  }, [savedReviews]);

  const reviews = useMemo(() => [...savedReviews, ...t.items], [savedReviews, t.items]);

  const averageRating = useMemo(() => {
    if (!reviews.length) return '5.0';
    const sum = reviews.reduce((acc, item) => acc + (Number(item.rating) || 5), 0);
    return (sum / reviews.length).toFixed(1);
  }, [reviews]);

  const handleImages = async (event) => {
    const selectedFiles = Array.from(event.target.files || []);
    setError('');

    if (images.length + selectedFiles.length > maxImages) {
      setError(t.tooManyImages);
      event.target.value = '';
      return;
    }

    const preparedImages = [];

    for (const file of selectedFiles) {
      if (!file.type.startsWith('image/')) continue;

      if (file.size > maxImageSize) {
        setError(t.fileTooLarge);
        event.target.value = '';
        return;
      }

      const dataUrl = await readFileAsDataUrl(file);
      preparedImages.push({
        name: file.name,
        src: dataUrl,
      });
    }

    setImages((current) => [...current, ...preparedImages].slice(0, maxImages));
    event.target.value = '';
  };

  const removeImage = (indexToRemove) => {
    setImages((current) => current.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    const cleanName = name.trim();
    const cleanText = text.trim();

    if (!cleanName) {
      setError(t.requiredName);
      return;
    }

    if (!cleanText) {
      setError(t.requiredText);
      return;
    }

    const review = {
      text: cleanText,
      author: cleanName,
      role: t.newRole,
      rating,
      images,
      createdAt: new Date().toISOString(),
    };

    setSavedReviews((current) => [review, ...current]);
    setName('');
    setText('');
    setRating(5);
    setImages([]);
  };

  const clearLocalReviews = () => {
    setSavedReviews([]);
    setImages([]);
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // ignore
    }
  };

  return (
    <section className="reviews" id="reviews">
      <div className="reviews-container">
        <div className="reviews-hero">
          <span className="reviews-eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p className="reviews-subtitle">{t.subtitle}</p>

          <div className="reviews-stats">
            <div className="reviews-stat">
              <strong>{averageRating}</strong>
              <span>{t.avg}</span>
            </div>
            <div className="reviews-stat">
              <strong>{reviews.length}</strong>
              <span>{t.total}</span>
            </div>
            <div className="reviews-stat">
              <strong>5★</strong>
              <span>UI / UX</span>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((item, index) => (
            <article className="review-card" key={`${item.author}-${index}`}>
              <div className="review-card-top">
                <div className="review-avatar">{getInitials(item.author)}</div>
                <div>
                  <h4>{item.author}</h4>
                  <span>{item.role}</span>
                </div>
              </div>

              <Stars value={item.rating || 5} />
              <p className="review-text">“{item.text}”</p>

              {item.images?.length > 0 && (
                <div className="review-images">
                  {item.images.map((image, imageIndex) => (
                    <img src={image.src} alt={image.name || `review screenshot ${imageIndex + 1}`} key={imageIndex} />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <form className="review-form" onSubmit={handleSubmit}>
          <div className="review-form-head">
            <span>{t.ratingLabel}</span>
            <Stars value={rating} interactive onChange={setRating} />
          </div>

          <div className="review-form-title">
            <h3>{t.formTitle}</h3>
            <p>{t.formText}</p>
          </div>

          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={t.namePlaceholder}
            required
          />

          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder={t.textPlaceholder}
            rows={5}
            required
          />

          <div className="review-upload">
            <div>
              <strong>{t.screenshotLabel}</strong>
              <span>{t.screenshotHint}</span>
            </div>

            <label className="review-upload-button">
              {t.screenshotButton}
              <input type="file" accept="image/*" multiple onChange={handleImages} />
            </label>
          </div>

          {images.length > 0 && (
            <div className="review-preview-images">
              {images.map((image, index) => (
                <div className="review-preview-image" key={`${image.name}-${index}`}>
                  <img src={image.src} alt={image.name} />
                  <button type="button" onClick={() => removeImage(index)}>
                    {t.removeImage}
                  </button>
                </div>
              ))}
            </div>
          )}

          {error && <p className="review-error">{error}</p>}

          <div className="review-form-actions">
            <button type="submit" className="review-submit">{t.button}</button>
            {savedReviews.length > 0 && (
              <button type="button" className="review-clear" onClick={clearLocalReviews}>
                {t.clear}
              </button>
            )}
          </div>

          <p className="review-note">{t.note}</p>
        </form>
      </div>
    </section>
  );
}
