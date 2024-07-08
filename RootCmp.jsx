const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { Home } from './pages/Home.jsx'
import { ContactIndex } from './pages/ContactIndex.jsx'

export function App() {
    return (
        <Router>
            <div className='main-app'>

                <main className='container'>
                    <Routes>
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="/" element={<ContactIndex />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}
