import FooterPage from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import MenuSection from "./components/MenuSection"
import StorySection from "./components/StorySection"

function App () {
  const itemsHeader = ['Home', 'Cerita Kami', 'Menu', 'Kontak']
  const numberPhone = '+628-134-240-0303'
  const email = 'drip@mail.com'
  const location = 'Jalan Perintis Kemerdekaan No.17, Kota Makassar, Sulawesi Selatan, Indonesia'
  const heroItem = [
    {
      head : 'Secangkir Inspirasi Setiap Tetesnya dicankir',
      deskripsi : "Mengangkat rasa kopi yang mampu memberikan semangat dan ide baru setiap kali dinikmati",
      image : '/undraw_barista.svg',
      alt : 'hero-image-1'
    },
    {
      head : 'Drip: Nikmati Setiap Tetes Kehangatan',
      deskripsi : "Menekankan pada rasa nyaman dan kehangatan yang diberikan setiap cangkir kopi.",
      image : '/undraw_drink_coffee.svg',
      alt : 'hero-image-2'
    },
    {
      head : 'Drip: Rasa yang Mengalir Dalam Setiap Cangkir',
      deskripsi : "Fokus pada kelezatan kopi yang konsisten dan autentik di setiap cangkir.",
      image : '/undraw_hang.svg',
      alt : 'hero-image-3'
    },
  ]
  const storyItemHead = '"Welcome to Drip, where every drop tells a story"'
  const storyItemText = "Drip lahir dari kecintaan mendalam kami terhadap kopi dan keinginan untuk menciptakan tempat yang menghubungkan orang-orang melalui setiap tetesan rasa. Berawal dari sebuah impian sederhana, kami ingin menghadirkan pengalaman menikmati kopi yang otentik dan penuh kehangatan. Di Drip, kami percaya bahwa setiap cangkir kopi adalah sebuah karya seni—dari biji kopi pilihan yang kami ambil dari petani lokal, hingga proses penyeduhan yang . . . ."
  const menuItem = [
    {
      menu : "Es Kopi Drip",
      deskripsi : "Espresso shot dalam segelas air dengan menjaga ketebalan rasa kopinya",
      price : "Rp 15.000",
      img : "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
    },
    {
      menu : "Es Kopi Panas",
      deskripsi : "Espresso shot dalam segelas air dengan menjaga ketebalan rasa kopinya",
      price : "Rp 12.000",
      img : "https://cdn0-production-images-kly.akamaized.net/2aw-zxaVEg1UvF2M4CKXZJzxYMs=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4718480/original/057347300_1705473057-23128948_1909.i305.022.P.m005.c20.realistic_coffee_set-02.jpg"
    },
    {
      menu : "Es Kopi Hitam",
      deskripsi : "Espresso shot dalam segelas air dengan menjaga ketebalan rasa kopinya",
      price : "Rp 10.000",
      img : "https://asset.kompas.com/crops/6I128Rw0csieEhe5xiOh-a01dng=/113x47:913x580/750x500/data/photo/2024/05/02/663290feb5358.jpg"
    },
    {
      menu : "Es Kopi Dingin",
      deskripsi : "Espresso shot dalam segelas air dengan menjaga ketebalan rasa kopinya",
      price : "Rp 15.000",
      img : "https://asset.kompas.com/crops/LiyS15q5anDuX53HR5EhvUMRapU=/0x0:1000x667/750x500/data/photo/2019/10/17/5da842819a10a.jpg"
    },
  ]


  return (
    <>
      <Header items={itemsHeader}/>
      <HeroSection heroItem={heroItem}/>
      <StorySection storyItemHead={storyItemHead} storyItemText={storyItemText}/>
      <MenuSection menuItem={menuItem}/>
      <FooterPage numberPhone={numberPhone} email={email} location={location}/>
    </>
  )
}

export default App
