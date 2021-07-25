import { Link } from 'react-router-dom';
import { Publish } from '@material-ui/icons';
import Chart from '../../components/chart/Chart';
import { productsData } from '../../dummyData';
import './productDetails.scss';

const productDetails = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productsData}
            dataKey="Sales"
            title="Sales Performance"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfo">
            <div className="productInfoTop">
              <img
                src="https://www.cnet.com/a/img/v7GALUSb_SkAOVKRH_C3kbV1v-k=/940x0/2016/09/13/1d528046-b515-48e5-a170-b9895ec09e89/apple-airpods-2016-014.jpg"
                alt="product img"
                className="productInfoImg"
              />
              <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">ID:</span>
                <span className="productInfoValue"> 132</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Sales</span>
                <span className="productInfoValue"> 544</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Active</span>
                <span className="productInfoValue"> Yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">In Stock:</span>
                <span className="productInfoValue"> No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpods" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://www.cnet.com/a/img/v7GALUSb_SkAOVKRH_C3kbV1v-k=/940x0/2016/09/13/1d528046-b515-48e5-a170-b9895ec09e89/apple-airpods-2016-014.jpg"
                alt="product img"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default productDetails;
