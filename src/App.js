import Header from './components/Header';
import Categories from './components/Categories';
import Carousel from "./components/Carousel";
import Box1 from './components/Box1'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="box1">
     <Categories src= "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" text="Top Offers"/>
     <Categories src= "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" text= "Grocery"/>
     <Categories src= "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" text= "MObile"/>
     <Categories src= "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" text= "Fashion"/>
     <Categories src= "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" text= "Electronics"/>
     <Categories src= "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" text= "Home"/>
     <Categories src= "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" text= "Appliances"/>
     <Categories src= "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" text= "Travel"/>
     <Categories src= "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" text= "Beauty and Toys"/>
 </div>

 <Carousel />
 <h1 className='title'>Deal of the day</h1>
      <button className='bbtn'>View All</button>
      <div className='box2'>
    <Box1 src= "https://rukminim1.flixcart.com/flap/150/150/image/15c85034baa89e62.png?q=70" cap1="Bags and Luggage..." cap2=" 50%+Extra10% off" cap3="Grab The deal"/>
    <Box1 src= "https://rukminim1.flixcart.com/flap/150/150/image/d350c327d5682ca2.jpg?q=70" cap1="Sukkhi, Yellow Chimes" cap2="upto 70%+Extra5% off" cap3="Wedding Season deal"/>
    <Box1 src= "https://rukminim1.flixcart.com/image/150/150/keuagsw0/lipstick/w/x/k/4-7-enrich-matte-lipstick-lakme-original-imafvfqqpbbrtzpd.jpeg?q=70" cap1="Makeup Must Haves" cap2="Min 20%+Extra5% off" cap3="Lakme Maybelline & more"/>
    <Box1 src= "https://rukminim1.flixcart.com/image/150/150/kgv5x8w0/jacket/n/p/f/m-dtaw20jk023a-ducati-original-imafxyazyemfzzv4.jpeg?q=70" cap1="Best of Brands" cap2="Min 50% off" cap3="Men's clothing"/>
    <Box1 src= "https://rukminim1.flixcart.com/image/150/150/k6fd47k0/top/7/c/r/l-211394601-only-original-imafzvfghqg6xc2j.jpeg?q=70" cap1="Tops Bottom and Jacckets" cap2="upto 80% off" cap3="vero Moda,Flying Machi"/>
    <Box1 src= "https://rukminim1.flixcart.com/image/150/150/krkyt8w0/shoe/6/b/r/11-hmi55-11-adidas-vicblu-ftwwht-solred-conavy-original-imag5cd4ayngenun.jpeg?q=70" cap1="ADIDAS and Rebook,Puma" cap2="Min 50% off" cap3="Sports and Showes & more"/>
    <Box1 src= "https://rukminim1.flixcart.com/image/150/150/kwb07m80/power-bank/p/y/p/-original-imag9yjrvtzqmdxm.jpeg?q=70"  cap1="Top Selling and PowerBank" cap2="Extra 5% off" cap3="Ammbrane, ZEERONIC &.."/>
     <Box1 src= "https://rukminim1.flixcart.com/image/150/150/kmwcuq80/shoe/w/u/s/7-444-gry-org-bruton-orange-original-imagfp7fzz5ftzfc.jpeg?q=70" cap1="Sparx Button & more" cap2="from 199+Extra10%off  " cap3="Casual Shoes For Mens"/>
    </div>
    <h1 className='title'>Trending Offers</h1>
      <button className='bbtn'>View All</button>
    <div className='box2'>
    <Box1 src= "https://rukminim1.flixcart.com/image/150/150/kt7jv680/screen-guard/edge-to-edge-screen-guard/1/z/5/cs-noise-colorfit-pro-3-vprime-original-imag6hkzehb4jysy.jpeg?q=70"  cap1="Smart Watch Screenguar.." cap2="Extra 5% off" cap3="Shop Now" />
    <Box1 src= "https://rukminim1.flixcart.com/image/150/150/ksc46fk0/fabric/v/m/j/no-2-35-m-unstitched-shankar01-trijal-fab-original-imag5xd6gfptxtqp.jpeg?q=70"  cap1="Men's Shirt and Trouser" cap2="Top picks" cap3="Explore now" />
    <Box1 src= "https://rukminim1.flixcart.com/image/150/150/jyvvgcw0/shoe/j/y/a/cscocmouse-6-asian-brown-original-imaf78gxmkzgxg7p.jpeg?q=70" cap1="Sport Shoes" cap2="Extra 45% off" cap3="Grab Now" />
    <Box1 src= "https://rukminim1.flixcart.com/image/150/150/k7qinbk0/headphone/y/g/g/fd1-s-s-l21-wireless-bluetooth-headphone-waterproof-stereo-original-imafpwpajf9g25wg.jpeg?q=70" cap1="HeadPhones" cap2="Extra 5% off" cap3="Shop Now" />
     <Box1 src= "https://rukminim1.flixcart.com/image/150/150/klfhk7k0/sari/w/x/h/free-rebit-lichi-toriox-semi-stitched-original-imagyjvgnzhumpju.jpeg?q=70" cap1="Women's Sarees" cap2="Top picks" cap3="Greating saving" />
     <Box1 src= "https://rukminim1.flixcart.com/image/150/150/kesv0y80/ethnic-set/p/g/a/l-shrug-l-anushansa-original-imafvdx2hqjpemwy.jpeg?q=70" cap1="Women's Kurttas" cap2="Top picks" cap3="Hurry Dont't Miss Out" />
     <Box1 src= "https://rukminim1.flixcart.com/image/150/150/k69ncsw0/sport-glove/w/j/c/both-hand-gloves-half-finger-tactical-hard-knuckle-ridding-original-imafzrd9ggjfhpth.jpeg?q=70" cap1="Ridding Gloves" cap2="Extra 5% off" cap3="Discount Now" />
     <Box1 src= "https://rukminim1.flixcart.com/image/150/150/k6fd47k0pkrrdj/wallet-card-wallet/t/u/c/sam-17-brw-pln-alb-samtroh-original-imafgf56fvf6aybb.jpeg?q=70" cap1="Wallets" cap2="Extra 12% off" cap3="Explore Now" />
     </div>
     </div>
     );
    }
    
    export default App;

