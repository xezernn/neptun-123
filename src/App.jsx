import Main from "./components/main/Main"
import { Route, Routes, useLocation } from "react-router-dom"
import Layout from "./layouts/Layout"
import SelectedById from "./components/main/SelectedById"
import Details from "./components/main/Details"
import { useEffect } from "react"
import TotalProd from "./components/main/TotalProd"
import { Helmet } from "react-helmet"

function App() {
  const {pathname} = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  return (
    <>
      <Helmet>
        <title>Neptun</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/:catname/:subname/:subId" element={<SelectedById />} />
          <Route path="/:catname/:subname/:subId/:prodId" element={<Details />} />  
          <Route path="/:prodId" element={<Details />} />
          <Route path="/cartItems" element={<TotalProd />} />
        </Route>
      </Routes>
    </>
  )
}

export default App