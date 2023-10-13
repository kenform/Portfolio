import './styles/style.scss';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Preloader from './components/base/Preloader';
import ScrollToTop from './utils/scrollToTop';

function App() {
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
		<>
			{isLoading ? (
				<Preloader className={isLoading ? '' : 'done'} />
			) : (
				<div className={isLoading ? 'hidden' : 'wrapper'}>
					<ScrollToTop />
					
					<Header className={isLoading ? 'hidden' : ''} />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							basename={process.env.PUBLIC_URL}
							path='/projects'
							element={<Projects openModal={openModal} setOpenModal={setOpenModal} />}
						/>
						<Route basename={process.env.PUBLIC_URL} path='/contacts' element={<Contacts />} />
					</Routes>
					<Footer />
					{openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
				</div>
			)}
		</>
	);
}

export default App;
