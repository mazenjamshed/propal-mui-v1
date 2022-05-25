import { styled, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { unApprovedProperties } from '../../api';
import UserBox from './components/user-box.component';
const ListItem = styled('li')(() => ({
  border: '1px solid #000',
  color: '#1d3557',
  width: '14rem',
  display: 'block',
  padding: '.6rem 1.8rem',
  marginBottom: '.5rem',
  '&:hover': {
    backgroundColor: '#1d3557',
    color: 'white',
    cursor: 'pointer',
  },
}));
const AdminDashboard = () => {
  const [userClicked, setUserClicked] = useState(false);
  const [unApprovedClicked, setUnApprovedClicked] = useState(false);
  const handleUserClicked = () => {
    setUserClicked((state) => !state);
    setUnApprovedClicked(false);
  };
  const handleUnApprovedClicked = () => {
    setUnApprovedClicked((state) => !state);
    setUserClicked(false);
  };
  // let unProp;
  // useEffect(() => {
  //   const asyncCall = async () => {
  //     const unApproved = await unApprovedProperties();
  //     console.log('propoposposp', unApproved);
  //     return unApproved;
  //   };
  //   unProp = asyncCall();      //!ISSUEE HERE
  // }, []);
  // const [properties] = unApproved.data.data;
  const adminData = useSelector(({ admin }) => admin?.adminData?.data);
  const users = adminData?.users;
  // console.log('admmmmmm', adminData);
  // console.log(unProp);
  return (
    <>
      <div>This is admin dashboard</div>
      <ListItem onClick={handleUserClicked}>Users: </ListItem>
      <ListItem onClick={handleUnApprovedClicked}>UnApproved Requests</ListItem>
      {userClicked &&
        users?.map((user, i) => <UserBox userObj={user} key={i} />)}
      {/* {unApprovedClicked &&
        unApproved.data.data.properties?.map((prop, i) => (
          <li key={i}>
            {prop.title}
            {prop._id}
            <Button>Approve ths</Button>
          </li>
        ))} */}
    </>
  );
};

export default AdminDashboard;
