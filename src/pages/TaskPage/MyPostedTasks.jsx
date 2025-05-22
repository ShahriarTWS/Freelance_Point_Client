import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const MyPostedTasks = () => {
    const { user, loading } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/tasks/mytasks?email=${user.email}`)
                .then(res => res.json())
                .then(data => setTasks(data))
                .catch(err => console.error(err));
        }
    }, [user]);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this task?')) return;

        try {
            const res = await fetch(`http://localhost:3000/task/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                setTasks(tasks.filter(task => task._id !== id));
            } else {
                alert('Failed to delete task');
            }
        } catch (error) {
            alert('Error deleting task');
        }
    };

    const handleUpdate = (id) => {
        navigate(`/task/update/${id}`);
    };

    const handleViewBids = (id) => {
        navigate(`/task/bids/${id}`);
    };

    if (loading) return <div className="text-center py-10 text-xl font-semibold">Loading...</div>;

    if (!user) return <div className="text-center py-10 text-lg text-red-600">Please log in to view your posted tasks.</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center md:text-left">My Posted Tasks</h1>

            {tasks.length === 0 ? (
                <p className="text-center text-gray-600">You haven't posted any tasks yet.</p>
            ) : (
                <>
                    {/* Mobile view - Card layout */}
                    <div className="grid grid-cols-1 gap-4 md:hidden">
                        {tasks.map(task => (
                            <div key={task._id} className="border rounded-lg p-4 bg-white shadow">
                                <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
                                <p className="text-sm text-gray-600 mb-1"><strong>Category:</strong> {task.category}</p>
                                <p className="text-sm text-gray-600 mb-1"><strong>Deadline:</strong> {new Date(task.deadline).toLocaleDateString()}</p>
                                <p className="text-sm text-gray-600 mb-4"><strong>Budget:</strong> ${task.budget}</p>
                                <div className="flex flex-wrap gap-2">
                                    <button onClick={() => handleUpdate(task._id)} className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                                        Update
                                    </button>
                                    <button onClick={() => handleDelete(task._id)} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
                                        Delete
                                    </button>
                                    <button onClick={() => handleViewBids(task._id)} className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
                                        Bids
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop view - Table layout */}
                    <div className="hidden md:block overflow-x-auto border rounded-lg shadow">
                        <table className="min-w-full bg-white text-sm">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="py-3 px-4">Title</th>
                                    <th className="py-3 px-4">Category</th>
                                    <th className="py-3 px-4">Deadline</th>
                                    <th className="py-3 px-4">Budget</th>
                                    <th className="py-3 px-4 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map(task => (
                                    <tr key={task._id} className="border-t hover:bg-gray-50 transition">
                                        <td className="py-3 px-4">{task.title}</td>
                                        <td className="py-3 px-4">{task.category}</td>
                                        <td className="py-3 px-4">{new Date(task.deadline).toLocaleDateString()}</td>
                                        <td className="py-3 px-4">${task.budget}</td>
                                        <td className="py-3 px-4 text-center space-x-2">
                                            <button onClick={() => handleUpdate(task._id)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                                                Update
                                            </button>
                                            <button onClick={() => handleDelete(task._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                                Delete
                                            </button>
                                            <button onClick={() => handleViewBids(task._id)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                                                Bids
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default MyPostedTasks;
