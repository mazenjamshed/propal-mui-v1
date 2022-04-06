import Hero from '../../layout/homepage/hero/hero.component';
import Rent from '../../layout/homepage/rent/rent.component';
import Sales from '../../layout/homepage/sales/sales.component';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Sales />
      <Rent />
    </div>
  );
};

export default Home;
