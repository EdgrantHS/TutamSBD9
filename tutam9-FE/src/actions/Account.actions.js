import axios from "axios";
import qs from "qs";

export const login = async (username, password) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/user/login`,
      qs.stringify({
        username,
        password
      })
    );
    return response.data;
  } catch (error) {
    // console.log(error.response.data);
    return error.response.data;
  }
}

export const register = async (username, password) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/user/register`,
      qs.stringify({
        username,
        password
      })
    );
    return response.data;
  } catch (error) {
    // console.log(error);
    return error.response.data;
  }
}

export const changePassword = async (username, password, newPassword) => {
  // if newPassword empty, delete account
  if (newPassword === "") {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        qs.stringify({
          username: username,
          password: password
        })
      );

      if (response.data.success) {
        const userId = response.data.data.id;
        const deleteResponse = await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/user/${userId}`
        );
        return deleteResponse.data;
      }
    } catch (error) {
      return error;
    }
  }

  // if newPassword not empty, change password
  else{
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        qs.stringify({
          username: username,
          password: password
        })
      );

      console.log(response.data.data);

      if (response.data.success) {
        const userId = response.data.data.id;
        const updateResponse = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/user/${userId}`,
          qs.stringify({
            id: userId,
            username: username,
            password: newPassword
          })
        );
        return updateResponse.data;
      }
    } catch (error) {
      return error;
    }
  }
}