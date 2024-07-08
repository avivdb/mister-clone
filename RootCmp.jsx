const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { Home } from './pages/Home.jsx'


export function App() {
    return (
        <Router>
            <div className='main-app'>

                <main className='container'>
                    <Routes>
                        <Route path="/" element={<Home />} />

                    </Routes>
                </main>
            </div>
        </Router>
    )
}
