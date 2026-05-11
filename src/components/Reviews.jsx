import './Reviews.css';

const reviews = {
  ru: {
    title: 'Отзывы',
    subtitle: 'Несколько отзывов и впечатлений о моих проектах.',
    items: [
      {
        text: 'Сайт получился аккуратным, понятным и визуально приятным. Хорошая структура и удобная подача проектов.',
        author: 'Demo feedback',
        role: 'Portfolio review'
      },
      {
        text: 'Проект быстро передаёт суть идеи: понятный первый экран, чистые блоки и хорошая адаптация под разные устройства.',
        author: 'Internal review',
        role: 'Landing page feedback'
      },
      {
        text: 'Хорошее внимание к деталям: карточки, состояния кнопок, модальные окна и переключение темы делают сайт живым.',
        author: 'UI feedback',
        role: 'Interface review'
      }
    ]
  },
  en: {
    title: 'Reviews',
    subtitle: 'A few notes and impressions about my projects.',
    items: [
      {
        text: 'The website feels clean, clear and visually pleasant. Good structure and strong project presentation.',
        author: 'Demo feedback',
        role: 'Portfolio review'
      },
      {
        text: 'The project quickly communicates its idea: clear hero section, clean blocks and good responsive behavior.',
        author: 'Internal review',
        role: 'Landing page feedback'
      },
      {
        text: 'Nice attention to detail: cards, button states, modals and theme switching make the interface feel alive.',
        author: 'UI feedback',
        role: 'Interface review'
      }
    ]
  }
};

export default function Reviews({ language = 'ru' }) {
  const t = reviews[language] || reviews.ru;

  return (
    <section className="reviews" id="reviews">
      <div className="reviews-container">
        <h2>{t.title}</h2>
        <p className="reviews-subtitle">{t.subtitle}</p>

        <div className="reviews-grid">
          {t.items.map((item, index) => (
            <div className="review-card" key={index}>
              <p className="review-text">“{item.text}”</p>
              <div className="review-footer">
                <h4>{item.author}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
