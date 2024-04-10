import { Outlet } from "react-router-dom"
import Header from "./components/Header"

import { Link } from "react-router-dom"
function App() {

  return (
    <div>
      {/* <Header /> */}
      <main className="flex items-center flex-col">
        <h1 className="text-black text-3xl py-10 font-bold">Welcome to dribble! </h1>
        <button><Link to={"/home"}  className="bg-pink-500 px-10 py-4 text-white">Sign Up</Link></button>
        <Outlet />
      </main>
    </div>
  )
}

export default App
