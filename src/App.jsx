import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedUser = { ...user, [name]: value };
    dispatch({ type: 'UPDATE_USER', payload: updatedUser });
  };

  return (
    <div>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={user.gender}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </form>
      <div>
        <h2>Current User:</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Gender: {user.gender}</p>
      </div>
    </div>
  );
};

export default App;