import './styles/main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '../src/components/navbar/Navbar'
import Footer from '../src/components/footer/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Contacts from './pages/Contacts'

import ScrollToTop from './utils/scrollToTop'

function App() {
	return (
		<div className='wrapper'>
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					{/* Маршрут */}
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/project/:id' element={<Project />} />
					<Route path='/contacts' element={<Contacts />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
