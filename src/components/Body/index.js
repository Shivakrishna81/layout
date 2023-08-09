// Write your code here
import './index.css'

const Body = () => {
  const renderLeftNavbar = () => (
    <div className="navbar">
      <h1 className="h1">Left Navbar Menu</h1>
      <p className="p">Item 1</p>
      <p>Item 2</p>
      <p>Item 3</p>
      <p>Item 4</p>
    </div>
  )

  const renderRightNavbar = () => (
    <div className="navbar">
      <h1>Right Navbar Menu</h1>
      <div className="box">Ad 1</div>
      <div className="box">Ad 2</div>
    </div>
  )

  return <div className="body"></div>
}
