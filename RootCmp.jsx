const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux


import { ContactDetails } from './pages/ContactDetails.jsx'
import { ContactIndex } from './pages/ContactIndex.jsx'
import { store } from './store/store.js'



export function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className='main-app'>

                    <main className='container'>
                        <Routes>
                            {/* <Route path="/" element={<Home />} /> */}
                            <Route path="/" element={<ContactIndex />} />
                            <Route path="/:contactId" element={<ContactDetails />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </Provider>
    )
}
