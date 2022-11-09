import {Navbar, Welcome, Footer, Transactions} from './components';
//changer le className gradient-bg-welcome
//gradient couleur classnames etc à changer dans Index.css

const App = () =>  {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500"> 
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App
