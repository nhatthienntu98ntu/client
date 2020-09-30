import axios from "axios";

const URL = "http://localhost:5000/users";

class UserService {
  //* Get All Users
  static getUsers() {
    return axios.get(URL).then((res) => {
      return res.data;
    });
  }

  //* Add User
  static insertUser(user) {
    return axios.post(URL, user);
  }

  //* Edit User
  static editUser(user) {
    return axios.put(URL, user);
  }

  //* Delete User
  static deleteUser(_id) {
    return axios.delete(`${URL}/${_id}`);
  }
}

export default UserService;
