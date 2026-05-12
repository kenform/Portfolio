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
        text: 'Сайт получился аккуратным, понятным и визуально приятным. Хорошая структура и удобная подача проектов.',
        author: 'Demo feedback',
        role: 'Portfolio review',
        rating: 5,
        images: [],
      },
      {
        text: 'Проект быстро передаёт суть идеи: понятный первый экран, чистые блоки и хорошая адаптация под разные устройства.',
        author: 'Internal review',
        role: 'Landing page feedback',
        rating: 5,
        images: [],
      },
      {
        text: 'Хорошее внимание к деталям: карточки, состояния кнопок, модальные окна и переключение темы делают сайт живым.',
        author: 'UI feedback',
        role: 'Interface review',
        rating: 5,
        images: [],
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
        text: 'The website feels clean, clear and visually pleasant. Good structure and strong project presentation.',
        author: 'Demo feedback',
        role: 'Portfolio review',
        rating: 5,
        images: [],
      },
      {
        text: 'The project quickly communicates its idea: clear hero section, clean blocks and good responsive behavior.',
        author: 'Internal review',
        role: 'Landing page feedback',
        rating: 5,
        images: [],
      },
      {
        text: 'Nice attention to detail: cards, button states, modals and theme switching make the interface feel alive.',
        author: 'UI feedback',
        role: 'Interface review',
        rating: 5,
        images: [],
      },
    ],
  },
};

const storageKey = 'kenform_portfolio_reviews';
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
