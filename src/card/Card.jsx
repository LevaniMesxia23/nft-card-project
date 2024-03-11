import "./card.css"
import Equilibrium from "/images/image-equilibrium.jpg"
import Ethereum from "/images/icon-ethereum.svg"
import Clock from "/images/icon-clock.svg"
import Avatar from "/images/image-avatar.png"
export default function Card(){
  let show = false;
  return (
    <div className="container">
      <img className="Equilibrium" src={Equilibrium} alt="" />
      <h1 className="title">Equilibrium #3429</h1>
      <p className="text">Our Equilibrium collection promotes balance and calm.</p>
      <div className="info-container">
        <div className="eth">
          <img src={Ethereum} alt="" />
          <span>0.041 ETH</span>
        </div>
        <div className="clock">
          <img src={Clock} alt="" />
          <span>3 days left</span>
        </div>
      </div> 
      <div className="bottom">
        <img src={Avatar} alt="" />
        <p>
        Creation of<span> Jules Wyvern</span>
        </p>
      </div>
    </div>
  )
}