import './styles/style.scss';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { darkTheme, lightTheme } from './utils/Themes.js';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';

import ScrollToTop from './utils/scrollToTop';

function App() {
	const [darkMode, setDarkMode] = useState(true);
	const [openModal, setOpenModal] = useState({ state: false, project: null });
	console.log(darkMode);
	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<div className='wrapper'>
				<Router>
					<ScrollToTop />
					<Header />
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
					{openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
