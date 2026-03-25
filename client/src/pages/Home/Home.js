import "./Home.css";
import Product from "../../components/Product/Product";

function Home() {
  return (
    <div className="HomePage">

      <div className="Category"> 
        <button>Bestsellers</button>
        <button>Fresh</button>
        <button>Today's deals</button>
        <button>MX Player</button>
        <button>Sell</button>
        <button>Electronics</button>
        <button>Fashion</button>
        <button>Mobiles</button>
        <button>Home & Kitchen</button>
        <button>Books</button>
        <button>Beauty</button>
        <button>Sports</button>
        <button>Prime</button>
        <button>Toys  &Games</button>
        <button>Computers</button>
      </div>

      <img className="Banner" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/FebBx/Desktop_tall_Hero_1500x600_Books-for-SSC-UPSC--more._CB788069543_.jpg" alt="Amazon Banner" />
      
      <div className="Row1">  
        <Product 
          title="Apple AirPods Pro (2nd Generation) with MagSafe Case (USB‑C) ​​​​​​​(White)"
          price="18,900"
          image="https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg"
        />
        <Product
        title="Vincent Chase By Lenskart | Full Rim Square | Polarized Stylish Sunglasses | 100% UV Protected | For Men & Women"
        price="698"
        image="https://m.media-amazon.com/images/I/61LuLR7IR5L._SX679_.jpg"
        />
        <Product 
        title="Makemeebold Make Mee Bold Frizz Free Straightening Brush for Hair | Hair straightener for woman with 73mm Large Paddle Design | Electric Comb for Women | Gifts for woman | PTC Fast Heat-Up (30s) | 2 Heat Settings (180°C & 210°C) | Auto Shut-Off & 360° Swivel Cord"
        price="2,298"
        image="https://m.media-amazon.com/images/I/71qadpjvHGL._SX679_.jpg"
        />
        <Product
        title="Titan Karishma Quartz Analog With Date Blue Dial Two Toned Silver & Rose Gold Stainless Steel Strap Watch for Men - NT1825KM01"
        price="3,511"
        image="https://m.media-amazon.com/images/I/715u6l7tnGL._SX522_.jpg"
        />
        <Product
        title="Toy Imagine Pack of 12 Face Changing Cartoon Keychain Return Gifts for Kids Boys & Girls 3 Expressions 3DKeychain Return Gifts for Birthday Party Birthday Gifts for Kid Returns Gift for Kids Age 6-10"
        price="699"
        image="https://m.media-amazon.com/images/I/71ddOCnIOQL._SX522_.jpg"
        />
      </div>

      <div className="Row2">
        <Product 
        title="Lenovo IdeaPad Slim 5 Intel Core Ultra 7 155H (16GB RAM/1TB SSD/16 (40.6cm)/WUXGA IPS/Windows 11/Office Home 2024/Backlit Keyboard/1Yr ADP Free/Grey/1.82Kg), 83DC0094IN"
        price="88,990"
        image="https://m.media-amazon.com/images/I/71K-+2CT4uL._SX679_.jpg"
        />
        <Product 
        title="Samsung Galaxy S25 Ultra 5G (Titanium Gray, 12GB RAM, 256GB Storage)"
        price="1,59,990"
        image="https://m.media-amazon.com/images/I/71RLLn9RZxL._SX679_.jpg"
        />
        <Product 
        title="Cubelelo Drift 2x2, 3x3 & Pyraminx Cube Combo (Stickerless) | Ideal for Kids Above 3 4 5 6 Years Old Boys Girls | 3 in 1 Speedcube Gift Set | High Speed Puzzle 3x3x3 2x2x2 Pyramid Triangle"
        price="499"
        image="https://m.media-amazon.com/images/I/61iAK4X0B8L._SX522_.jpg"
        />
        <Product
        title="Green Soul Comfy | 1 Seater Recliner Sofa with Soft Suede Fabric & Luxuriously Padded Body | Recliner for Relaxing at Home | 3 Years Warranty (Soothing Grey) | Installation Provided"
        price="15,990"
        image="https://m.media-amazon.com/images/I/81a3RBRij3L._SX679_.jpg"
        />
        <Product
        title="Fastlink;Self-Playing Digital Grand Piano: Immersive Piano Experience with Authentic Sound & Touch"
        price="9,91,550"
        image="https://m.media-amazon.com/images/I/518odZV4XfL._SX679_.jpg"
        />
      </div>

      <div className="Row3">
        <Product 
        title="Puma Womens Foreverrun Nitro™ WNS Running Shoe"
        price="10,818"
        image="https://m.media-amazon.com/images/I/51AWdX-b9OL._SY695_.jpg"
        />
        <Product 
        title="Sony 139 cm (55 inches) BRAVIA 2M2 Series 4K Ultra HD Smart LED Google TV K-55S25BM2"
        price="55,950"
        image="https://m.media-amazon.com/images/I/81Vs1ZXn43L._SX522_.jpg"
        />
        <Product 
        title="Safari Nudge Laptop Backpack for men & women, school bag for boys and girls, college bag, office bag, travel bag, 3 compartments, Bottle holder, Front pocket, Color Black"
        price="499"
        image="https://m.media-amazon.com/images/I/61ZWpOeKc9L._SX679_.jpg"
        />
        <Product
        title="Henrix 38C 38 Inch Cutaway Basswood Acoustic Guitar With Dual Action Truss Rod, Gigbag, Picks, String Set, String Winder, Strap, Polishing Cloth & Ebook - Natural"
        price="3,299"
        image="https://m.media-amazon.com/images/I/61eJNrkgvOL._SX522_.jpg"
        />
        <Product
        title="Attack on Titan Omnibus 1 (Vol. 1-3)"
        price="1,261"
        image="https://m.media-amazon.com/images/I/81PMKrZD-2L._SY425_.jpg"
        />
      </div>

      <div className="Back2Top">Back to top</div>
      <div className="Footer">
      <div className="Top">
      <div className="Top1">
        <h4>Get to Know Us</h4>
        <p>About Us</p>
        <p>Careers</p>
        <p>Press Releases</p>
        <p>Amazon Science</p>
      </div>
      <div>
        <h4>Connect with Us</h4>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
      <div>
        <h4>Make Money with Us</h4>
        <p>Sell on Amazon</p>
        <p>Affiliate Program</p>
        <p>Advertise Your Products</p>
        <p>Amazon Global Selling</p>
        <p>Protect and Build Your Brand</p>
        <p>Fulfilment by Amazon</p>
        <p>Amazon Pay on Merchants</p>
      </div>
      <div className="Top2">
        <h4>Let Us Help You</h4>
        <p>Your Account</p>
        <p>Returns Centre</p>
        <p>Help</p>
        <p>100% Purchase Protection</p>
        <p>Help</p>
        </div>
      </div>
    </div>
    <div className="Down">
    <button>Conditions of Use & Sale</button>
    <button>Privacy Notice</button>
    <button>Interest-Based Ads</button>
    <div><b>
    © 1996-2026, Amazon.com, Inc. or its affiliates
    </b>
    </div>
    <div>CREATED BY SARTHAK BISHT</div>
  </div>
  </div>
  );
} 

export default Home;