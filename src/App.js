import './styles/style.scss';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from './utils/Themes.js';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Preloader from './components/base/Preloader';
import ScrollToTop from './utils/scrollToTop';

function App() {
	const [darkMode, setDarkMode] = useState(true);
	const [openModal, setOpenModal] = useState({ state: false, project: null });

	// loader state
	const [isLoading, setIsLoading] = useState(true);

	// let create async method to fetch fake data
	useEffect(() => {
		const fakeDataFetch = () => {
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
		};
		fakeDataFetch();
	}, []);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			{isLoading ? (
				<Preloader className={isLoading ? '' : 'done'} />
			) : (
				<div className={isLoading ? 'hidden' : 'wrapper'}>
					<Router>
						<ScrollToTop />
						<Header className={isLoading ? 'hidden' : ''} />
						<Routes>
							{/* Маршрут */}

							<Route path='/' element={<Home />} />

							<Route
								path='/projects'
								element={<Projects openModal={openModal} setOpenModal={setOpenModal} />}
							/>

							<Route path='/contacts' element={<Contacts />} />
						</Routes>
						<Footer />
						{openModal.state && (
							<ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
						)}
					</Router>
				</div>
			)}
		</ThemeProvider>
	);
}

export default App;
