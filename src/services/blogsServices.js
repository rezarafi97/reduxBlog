import axios from "axios";

const SERVER_URL = "http://localhost:9000";

// @desc Get All Blogs
// @route GET http://localhost:9000/blogs
export const getAllBlogs = () => {
    const url = `${SERVER_URL}/blogs`;
    return axios.get(url);
};

// @desc Get Contact With Blog ID
// @route GET http://localhost:9000/blogs/:blogId
export const getBlog = (blogId) => {
    const url = `${SERVER_URL}/blogs/${blogId}`;
    return axios.get(url);
};

// @desc  Get All Users
// @route GET http://localhost:9000/users
export const getAllUsers = () => {
    const url = `${SERVER_URL}/users`;
    return axios.get(url);
};

// @desc  Get User With User ID
// @route GET http://localhost:9000/users/:userId
export const getUser = (userId) => {
    const url = `${SERVER_URL}/users/${userId}`;
    return axios.get(url);
};

// @desc  Delete User
// @route DELETE http://localhost:9000/users/:userId
export const deleteUser = (userId) => {
    const url = `${SERVER_URL}/users/${userId}`;
    return axios.delete(url);
};

// @desc  Create New User
// @route POST http://localhost:9000/users
export const createUser = (user) => {
    const url = `${SERVER_URL}/users`;
    return axios.post(url, user);
};

// @desc  Create New Blog
// @route POST http://localhost:9000/blogs
export const createBlog = (blog) => {
    const url = `${SERVER_URL}/blogs`;
    return axios.post(url, blog);
};

// @desc  Update Blog
// @route PUT http://localhost:9000/blogs/:blogId
export const updateBlog = (blog, blogId) => {
    const url = `${SERVER_URL}/blogs/${blogId}`;
    return axios.put(url, blog);
};

// @desc  Delete Blog
// @route DELETE http://localhost:9000/blogs/:blogId
export const deleteBlog = (blogId) => {
    const url = `${SERVER_URL}/blogs/${blogId}`;
    return axios.delete(url);
};
