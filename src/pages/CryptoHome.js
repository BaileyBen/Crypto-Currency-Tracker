import { TopFiveList } from "../components/TopFiveList"
import { NavBar } from "../components/Navbar"
import { Titles } from "../components/Titles"
import { NextCoinList } from "../components/NextCoinList"


const CryptoHome = () => {
  return (
    <div>
      <NavBar/>
      <Titles/>
      <NextCoinList/>
      <TopFiveList/>
      

    </div>
  )
}

export default CryptoHome