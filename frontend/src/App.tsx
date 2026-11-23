
import { Routes, Route } from "react-router"

import NavigationBar from './components/NavigationBar.jsx'
import Home from "./pages/Home"
import Stats from "./pages/Stats"
import Edit from "./pages/Edit"


export default function App() {

  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </>
  )
}
