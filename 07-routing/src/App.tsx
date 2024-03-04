import Home from "./pages/Home"
import About from "./pages/About"
import { Router } from "./Router";

export type Routes = {
  path: string;
  Component: () => JSX.Element
}[]

const routes: Routes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/about',
    Component: About
  }
]





function App() {

  return (
    <main>
      <Router routes={routes} />
    </main>
  )
}

export default App
