import './newUser.scss';

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="John34" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="John34@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="*********" />
        </div>

        <div className="newUserItem">
          <label>Phone No.</label>
          <input type="text" placeholder="+1 234 256 4522" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="Male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="Female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewUser;
