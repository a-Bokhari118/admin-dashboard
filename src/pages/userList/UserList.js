import './userList.scss';
import { DeleteOutline } from '@material-ui/icons';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
const UserList = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={params.row.avatar}
              alt="user avatar"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 300 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transactions',
      headerName: 'Transactions Amount',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" />
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      username: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john123@gmail.com',
      status: 'active',
      transactions: '250$',
    },
    {
      id: 2,
      username: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john123@gmail.com',
      status: 'active',
      transactions: '250$',
    },
    {
      id: 3,
      username: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john123@gmail.com',
      status: 'active',
      transactions: '250$',
    },
    {
      id: 4,
      username: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john123@gmail.com',
      status: 'active',
      transactions: '250$',
    },
    {
      id: 5,
      username: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john123@gmail.com',
      status: 'active',
      transactions: '250$',
    },
    {
      id: 6,
      username: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john123@gmail.com',
      status: 'active',
      transactions: '250$',
    },
    {
      id: 7,
      username: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john123@gmail.com',
      status: 'active',
      transactions: '250$',
    },
    {
      id: 8,
      username: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john123@gmail.com',
      status: 'active',
      transactions: '250$',
    },
    {
      id: 9,
      username: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john123@gmail.com',
      status: 'active',
      transactions: '250$',
    },
    {
      id: 10,
      username: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john123@gmail.com',
      status: 'active',
      transactions: '250$',
    },
    {
      id: 11,
      username: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john123@gmail.com',
      status: 'active',
      transactions: '250$',
    },
    {
      id: 12,
      username: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john123@gmail.com',
      status: 'active',
      transactions: '250$',
    },
    {
      id: 13,
      username: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john123@gmail.com',
      status: 'active',
      transactions: '250$',
    },
    {
      id: 14,
      username: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john123@gmail.com',
      status: 'active',
      transactions: '250$',
    },
    {
      id: 15,
      username: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john123@gmail.com',
      status: 'active',
      transactions: '250$',
    },
  ];

  return (
    <div className="userList">
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

export default UserList;
