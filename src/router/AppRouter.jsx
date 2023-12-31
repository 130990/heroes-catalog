import { LoginPage } from "../auth"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { Route, Routes } from "react-router-dom"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage/>} />
            <Route path="/*" element={<HeroesRoutes />}/>
        </Routes>
    </>
  )
}
