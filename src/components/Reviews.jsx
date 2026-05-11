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
    namePlaceholder: 'Ваше имя',
    textPlaceholder: 'Напишите отзыв...',
    button: 'Добавить отзыв',
    clear: 'Очистить мои локальные отзывы',
    note: 'Сейчас отзывы сохраняются локально в вашем браузере. Для публичных отзывов позже подключим базу данных.',
    ratingLabel: 'Оценка',
    defaultAuthor: 'Гость',
    newRole: 'Новый отзыв',
    items: [
      {
        text: 'Сайт получился аккуратным, понятным и визуально приятным. Хорошая структура и удобная подача проектов.',
        author: 'Demo feedback',
        role: 'Portfolio review',
        rating: 5,
      },
      {
        text: 'Проект быстро передаёт суть идеи: понятный первый экран, чистые блоки и хорошая адаптация под разные устройства.',
        author: 'Internal review',
        role: 'Landing page feedback',
        rating: 5,
      },
      {
        text: 'Хорошее внимание к деталям: карточки, состояния кнопок, модальные окна и переключение темы делают сайт живым.',
        author: 'UI feedback',
        role: 'Interface review',
        rating: 5,
      },
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
    namePlaceholder: 'Your name',
    textPlaceholder: 'Write your review...',
    button: 'Add review',
    clear: 'Clear my local reviews',
    note: 'For now reviews are saved locally in your browser. Public reviews can be connected to a database later.',
    ratingLabel: 'Rating',
    defaultAuthor: 'Guest',
    newRole: 'New review',
    items: [
      {
        text: 'The website feels clean, clear and visually pleasant. Good structure and strong project presentation.',
        author: 'Demo feedback',
        role: 'Portfolio review',
        rating: 5,
      },
      {
        text: 'The project quickly communicates its idea: clear hero section, clean blocks and good responsive behavior.',
        author: 'Internal review',
        role: 'Landing page feedback',
        rating: 5,
      },
      {
        text: 'Nice attention to detail: cards, button states, modals and theme switching make the interface feel alive.',
        author: 'UI feedback',
        role: 'Interface review',
        rating: 5,
      },
    ],
  },
};

const storageKey = 'kenform_portfolio_reviews';

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

export default function Reviews({ language = 'ru' }) {
  const lang = language === 'ru' ? 'ru' : 'en';
  const t = content[lang];
  const [savedReviews, setSavedReviews] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);

  useEffect(() => {
    try {
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
      // ignore
    }
  }, [savedReviews]);

  const reviews = useMemo(() => [...savedReviews, ...t.items], [savedReviews, t.items]);

  const averageRating = useMemo(() => {
    if (!reviews.length) return '5.0';
    const sum = reviews.reduce((acc, item) => acc + (Number(item.rating) || 5), 0);
    return (sum / reviews.length).toFixed(1);
  }, [reviews]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanText = text.trim();
    if (!cleanText) return;

    const review = {
      text: cleanText,
      author: name.trim() || t.defaultAuthor,
      role: t.newRole,
      rating,
      createdAt: new Date().toISOString(),
    };

    setSavedReviews((current) => [review, ...current]);
    setName('');
    setText('');
    setRating(5);
  };

  const clearLocalReviews = () => {
    setSavedReviews([]);
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
          />

          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder={t.textPlaceholder}
            rows={5}
            required
          />

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
