import './productList.scss';
import { DeleteOutline } from '@material-ui/icons';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img
              className="productListImg"
              src={params.row.img}
              alt="product avatar"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 300 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline className="productListDelete" />
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      name: 'Apple Airpods',
      img: 'https://sa.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31abj2rfWdL.jpg',
      stock: '34',
      status: 'active',
      price: '250$',
    },
    {
      id: 2,
      name: 'Apple Airpods',
      img: 'https://sa.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31abj2rfWdL.jpg',
      stock: '34',
      status: 'active',
      price: '250$',
    },
    {
      id: 3,
      name: 'Apple Airpods',
      img: 'https://sa.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31abj2rfWdL.jpg',
      stock: '34',
      status: 'active',
      price: '250$',
    },
    {
      id: 4,
      name: 'Apple Airpods',
      img: 'https://sa.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31abj2rfWdL.jpg',
      stock: '34',
      status: 'active',
      price: '250$',
    },
    {
      id: 5,
      name: 'Apple Airpods',
      img: 'https://sa.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31abj2rfWdL.jpg',
      stock: '34',
      status: 'active',
      price: '250$',
    },
    {
      id: 6,
      name: 'Apple Airpods',
      img: 'https://sa.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31abj2rfWdL.jpg',
      stock: '34',
      status: 'active',
      price: '250$',
    },
    {
      id: 7,
      name: 'Apple Airpods',
      img: 'https://sa.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31abj2rfWdL.jpg',
      stock: '34',
      status: 'active',
      price: '250$',
    },
    {
      id: 8,
      name: 'Apple Airpods',
      img: 'https://sa.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31abj2rfWdL.jpg',
      stock: '34',
      status: 'active',
      price: '250$',
    },
    {
      id: 9,
      name: 'Apple Airpods',
      img: 'https://sa.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31abj2rfWdL.jpg',
      stock: '34',
      status: 'active',
      price: '250$',
    },
    {
      id: 10,
      name: 'Apple Airpods',
      img: 'https://sa.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31abj2rfWdL.jpg',
      stock: '34',
      status: 'active',
      price: '250$',
    },
    {
      id: 11,
      name: 'Apple Airpods',
      img: 'https://sa.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31abj2rfWdL.jpg',
      stock: '34',
      status: 'active',
      price: '250$',
    },
    {
      id: 12,
      name: 'Apple Airpods',
      img: 'https://sa.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31abj2rfWdL.jpg',
      stock: '34',
      status: 'active',
      price: '250$',
    },
    {
      id: 13,
      name: 'Apple Airpods',
      img: 'https://sa.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31abj2rfWdL.jpg',
      stock: '34',
      status: 'active',
      price: '250$',
    },
    {
      id: 14,
      name: 'Apple Airpods',
      img: 'https://sa.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31abj2rfWdL.jpg',
      stock: '34',
      status: 'active',
      price: '250$',
    },
    {
      id: 15,
      name: 'Apple Airpods',
      img: 'https://sa.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31abj2rfWdL.jpg',
      stock: '34',
      status: 'active',
      price: '250$',
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={14}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
