import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
const Hero = () => {
  return (
    <section 
    id="home"
    className="flex flex-col justify-center w-full min-h-screen gap-10 xl:flex-row max-container"
    >
      <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p className="">Our Summer Collections</p>
        <h1>
          <span>The New Arrivals</span>
          <br />
          <span>Nike Shoes</span>
        </h1>
        <p>Discover stylish Nike arrivals, quality, comfort, and innovation 
          for your active life.
        </p>
        <Button label="Show Now" iconURL={arrowRight}/>
      </div>
    </section>
  )
}

export default Hero