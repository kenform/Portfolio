import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n} defaultNS={'translation'}>
			<Provider store={store}>
				<Router basename={process.env.PUBLIC_URL}>
					<App />
				</Router>
			</Provider>
		</I18nextProvider>
	</React.StrictMode>,
);


// Portfolio page route marker + reveal animations
const initPortfolioPagePolish = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const setRoute = () => {
    const hashRoute = window.location.hash.replace(/^#\/?/, '').split('/')[0];
    const pathRoute = window.location.pathname.split('/').filter(Boolean)[0];
    document.body.dataset.route = hashRoute || pathRoute || 'home';
  };

  setRoute();
  window.addEventListener('hashchange', setRoute);
  window.addEventListener('popstate', setRoute);

  const revealSelector = [
    'main section > *',
    'main [class*="grid" i] > *',
    'main [class*="cards" i] > *',
    'main [class*="list" i] > *'
  ].join(',');

  const applyReveal = () => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    Array.from(document.querySelectorAll(revealSelector)).forEach((el, index) => {
      if (!(el instanceof HTMLElement)) return;
      if (el.closest('header, nav')) return;
      if (el.dataset.revealReady === '1') return;

      el.dataset.revealReady = '1';
      el.classList.add('reveal-on-scroll');
      el.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 55}ms`);
      observer.observe(el);
    });
  };

  window.requestAnimationFrame(applyReveal);
  window.setTimeout(applyReveal, 120);

  const mutationObserver = new MutationObserver(() => {
    window.requestAnimationFrame(applyReveal);
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

initPortfolioPagePolish();

