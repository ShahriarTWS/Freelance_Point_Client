import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import UpdateTaskModal from './UpdateTaskModal.jsx';
import { useNavigate } from 'react-router';
import Loading from '../Loading.jsx';
import ScrollToTop from '../../ScrollToTop/ScrollToTop.jsx';

const MyPostedTasks = () => {
    const { user, loading } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const refreshTasks = async () => {
        if (user?.email) {
            try {
                const taskRes = await fetch(`http://localhost:3000/tasks/mytasks?email=${user.email}`);
                const tasks = await taskRes.json();

                const tasksWithBidCounts = await Promise.all(tasks.map(async (task) => {
                    const countRes = await fetch(`http://localhost:3000/bids/count/${task._id}`);
                    const { count } = await countRes.json();
                    return { ...task, bidCount: count };
                }));

                setTasks(tasksWithBidCounts);
            } catch (error) {
                console.error('Error fetching tasks or bid counts:', error);
            }
        }
    };

    useEffect(() => {
        refreshTasks();
    }, [user]);

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/task/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
                            Swal.fire("Deleted!", "Your task has been deleted.", "success");
                        } else {
                            Swal.fire("Error!", "Failed to delete task.", "error");
                        }
                    })
                    .catch(() => {
                        Swal.fire("Error!", "Something went wrong.", "error");
                    });
            }
        });
    };

    const handleUpdate = (id) => {
        if (!user) {
            Swal.fire("Unauthorized", "Please log in to update tasks", "warning");
            return;
        }
        setSelectedTaskId(id);
        setIsModalOpen(true);
    };

    const handleViewBids = (id) => {
        navigate(`/task/taskDetails/${id}`);
    };

    const closeUpdateModal = () => {
        setIsModalOpen(false);
        setSelectedTaskId(null);
    };

    if (loading) return <Loading />;
    if (!user) return <div className="text-center py-10 text-lg text-red-600">Please log in to view your posted tasks.</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 my-12">
            <title>FreelancePoint || My Posted Task</title>
            <ScrollToTop></ScrollToTop>
            <h1 className="text-3xl font-bold mb-6 text-center md:text-left">My Posted Tasks</h1>

            {tasks.length === 0 ? (
                <Loading />
            ) : (
                <>
                    {/* Mobile View */}
                    <div className="grid grid-cols-1 gap-4 md:hidden">
                        {tasks.map(task => (
                            <div key={task._id} className="border rounded-lg p-4  shadow">
                                <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
                                <p className="text-sm  mb-1"><strong>Category:</strong> {task.category}</p>
                                <p className="text-sm  mb-1"><strong>Deadline:</strong> {new Date(task.deadline).toLocaleDateString()}</p>
                                <p className="text-sm  mb-1"><strong>Budget:</strong> ${task.budget}</p>
                                <p className="text-sm  mb-4"><strong>Bids:</strong> {task.bidCount ?? 0}</p>
                                <div className="flex flex-wrap gap-2">
                                    <button onClick={() => handleUpdate(task._id)} className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Update</button>
                                    <button onClick={() => handleDelete(task._id)} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">Delete</button>
                                    <button onClick={() => handleViewBids(task._id)} className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">Bids</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop View */}
                    <div className="hidden md:block overflow-x-auto border rounded-lg shadow">
                        <table className="min-w-full  text-sm">
                            <thead>
                                <tr className="bg-base-100 text-left">
                                    <th className="py-3 px-4">Title</th>
                                    <th className="py-3 px-4">Category</th>
                                    <th className="py-3 px-4">Deadline</th>
                                    <th className="py-3 px-4">Budget</th>
                                    <th className="py-3 px-4">Bids</th>
                                    <th className="py-3 px-4 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map(task => (
                                    <tr key={task._id} className="border-t hover:bg-base-300 transition">
                                        <td className="py-3 px-4">{task.title}</td>
                                        <td className="py-3 px-4">{task.category}</td>
                                        <td className="py-3 px-4">{new Date(task.deadline).toLocaleDateString()}</td>
                                        <td className="py-3 px-4">${task.budget}</td>
                                        <td className="py-3 px-4 font-semibold ">{task.bidCount ?? 0}</td>
                                        <td className="py-3 px-4 text-center space-x-2">
                                            <button onClick={() => handleUpdate(task._id)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Update</button>
                                            <button onClick={() => handleDelete(task._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                                            <button onClick={() => handleViewBids(task._id)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Bids</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}

            {/* Update Modal */}
            <UpdateTaskModal
                isOpen={isModalOpen}
                onClose={closeUpdateModal}
                taskId={selectedTaskId}
                user={user}
                onUpdateSuccess={refreshTasks}
            />
        </div>
    );
};

export default MyPostedTasks;

