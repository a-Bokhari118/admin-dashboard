import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import { userData } from '../../dummyData';
import './home.scss';
const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="User Analytics" data={userData} grid dataKey="user" />
    </div>
  );
};

export default Home;
