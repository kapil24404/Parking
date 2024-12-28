import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { getUser } from './helpers';

const Read = () => {
    const [posts, setPosts] = useState([]);

    // Fetch posts from localStorage
    const fetchPosts = () => {
        const savedPosts = JSON.parse(localStorage.getItem('vehicles')) || [];
        setPosts(savedPosts);
    };

    // UseEffect to load the data when the component mounts
    useEffect(() => {
        fetchPosts();
    }, []);

    const deleteConfirm = (index) => {
        let answer = window.confirm('Are you sure that you want to delete this vehicle data?');
        if (answer) {
            deletePost(index);
        }
    };

    const deletePost = (index) => {
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1); // Remove the post at the specified index
        localStorage.setItem('vehicles', JSON.stringify(updatedPosts)); // Update localStorage
        setPosts(updatedPosts); // Update the state
        alert('Vehicle data deleted successfully');
    };

    return (
        <div>
            <div className="header">
                <div className="container">
                    <h3>SMART PARKING SYSTEM</h3>
                </div>
            </div>
            <div className="logo wow fadeInDown animated" data-wow-delay=".5s">
                <Nav />
            </div>

            <div className="container p-5">
                {posts.length === 0 ? (
                    <p>No vehicles found.</p>
                ) : (
                    posts.map((post, index) => (
                        <div className="row" key={index} style={{ borderBottom: '1px solid silver' }}>
                            <div className="col pt-3 pb-2">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="card" style={{ padding: '10px', marginBottom: '20px' }}>
                                            <h2>{post.num}</h2>
                                            <h3>{post.content}</h3>
                                            <h4>{post.user}</h4>
                                            <h5>Fee Taken: {post.fee}</h5>
                                            <p className="badge">Coming From: {post.from}</p>
                                            <p className="badge">
                                                Arrived On: <span className="badge">{new Date(post.createdAt).toLocaleString()}</span>
                                            </p>
                                            <p className="badge">
                                                Expiry On: <span className="badge">{new Date(post.createdAt).getDate()}</span>
                                            </p>
                                            <p className="badge">
                                                Expiry On: <span className="badge">{new Date(post.createdAt).getDate() + 1}</span>
                                            </p>
                                        </div>
                                    </div>

                                    {getUser() && (
                                        <div className="col-md-4">
                                            <Link to={`/post/update/${post.slug}`} className="btn btn-sm btn-outline-warning">
                                                UPDATE
                                            </Link>
                                            <button
                                                onClick={() => deleteConfirm(index)}
                                                className="btn btn-sm btn-outline-danger ml-1"
                                            >
                                                DELETE
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="footer">
                <p>© Copyright 2020-21</p>
            </div>
        </div>
    );
};

export default Read;
