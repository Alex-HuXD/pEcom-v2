import { Routes, Route } from 'react-router-dom'

import HomePage from './routes/homePage/HomePage'
import Nav from './routes/navBar/NavBar'
import SignIn from './routes/signIn/SignIn'

const Shop = () => {
    return (
        <>
            <div>This is Shop</div>
        </>
    )
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Nav />}>
                <Route index element={<HomePage />} />
                <Route path="shop" element={<Shop />} />
                <Route path="sign-in" element={<SignIn />} />
            </Route>
        </Routes>
    )
}

export default App
