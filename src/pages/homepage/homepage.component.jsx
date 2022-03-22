import Footer from '../../layout/footer/footer.component';
import Hero from '../../layout/homepage/hero/hero.component';
import Rent from '../../layout/homepage/rent/rent.component';
import Sales from '../../layout/homepage/sales/sales.component';
import Navbar from '../../layout/navbar/navbar.component';

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Sales />
      <Rent />
      <Footer />
    </div>
  );
};

export default Home;
