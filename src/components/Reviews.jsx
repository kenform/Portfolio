import React, { useEffect, useMemo, useState } from 'react';
import './Reviews.css';

const content = {
  ru: {
    title: 'Отзывы',
    subtitle: 'Отзывы и впечатления о моих проектах.',
    formTitle: 'Оставить отзыв',
    namePlaceholder: 'Ваше имя',
    textPlaceholder: 'Ваш отзыв',
    button: 'Добавить отзыв',
    note: 'Пока отзывы сохраняются локально в вашем браузере. Позже можно подключить базу данных.',
    ratingLabel: 'Оценка',
    defaultAuthor: 'Гость',
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
    subtitle: 'Feedback and impressions about my projects.',
    formTitle: 'Leave a review',
    namePlaceholder: 'Your name',
    textPlaceholder: 'Your review',
    button: 'Add review',
    note: 'For now reviews are saved locally in your browser. Later this can be connected to a database.',
    ratingLabel: 'Rating',
    defaultAuthor: 'Guest',
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
      // ignore storage errors
    }
  }, [savedReviews]);

  const reviews = useMemo(() => [...savedReviews, ...t.items], [savedReviews, t.items]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanText = text.trim();
    if (!cleanText) return;

    const review = {
      text: cleanText,
      author: name.trim() || t.defaultAuthor,
      role: lang === 'ru' ? 'Новый отзыв' : 'New review',
      rating,
    };

    setSavedReviews((current) => [review, ...current]);
    setName('');
    setText('');
    setRating(5);
  };

  return (
    <section className="reviews" id="reviews">
      <div className="reviews-container">
        <h2>{t.title}</h2>
        <p className="reviews-subtitle">{t.subtitle}</p>

        <div className="reviews-grid">
          {reviews.map((item, index) => (
            <article className="review-card" key={`${item.author}-${index}`}>
              <Stars value={item.rating || 5} />
              <p className="review-text">“{item.text}”</p>
              <div className="review-footer">
                <h4>{item.author}</h4>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>

        <form className="review-form" onSubmit={handleSubmit}>
          <h3>{t.formTitle}</h3>

          <label className="rating-row">
            <span>{t.ratingLabel}</span>
            <Stars value={rating} interactive onChange={setRating} />
          </label>

          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={t.namePlaceholder}
          />

          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder={t.textPlaceholder}
            rows={4}
            required
          />

          <button type="submit">{t.button}</button>
          <p className="review-note">{t.note}</p>
        </form>
      </div>
    </section>
  );
}
