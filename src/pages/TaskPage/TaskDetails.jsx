import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const TaskDetails = () => {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [bidsCount, setBidsCount] = useState(0);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:3000/task/${id}`)
            .then(res => res.json())
            .then(data => setTask(data));

        fetch(`http://localhost:3000/bids/count/${id}`)
            .then(res => res.json())
            .then(data => setBidsCount(data.count));
    }, [id]);

    const handlePlaceBid = () => {
        if (!user) {
            Swal.fire({
                icon: 'warning',
                title: 'Please log in to place a bid.',
                timer: 2000,   // auto close after 2 seconds
                showConfirmButton: false,
                timerProgressBar: true,
                position: 'top',
            });
            return;
        }

        fetch('http://localhost:3000/bids', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                taskId: task._id,
                taskName: task.title,
                taskCategory: task.category,
                taskBudget: task.budget,
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            })
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Bid placed successfully!',
                    timer: 2000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    position: 'top',
                });
                setBidsCount(prev => prev + 1); // increment count on UI
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to place bid.',
                    timer: 2000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    position: 'top',
                });
            });
    };

    if (!task) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg text-gray-500">Loading task details...</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-16 my-12">
            <p className="text-lg font-semibold text-green-700 mb-6">
                You bid for {bidsCount} opportunities.
            </p>

            <div className=" bg-base-200  rounded-2xl shadow-lg overflow-hidden md:flex">
                <div className="md:flex-1 p-8 space-y-6">
                    <h1 className="text-4xl font-extrabold ">{task.title}</h1>

                    <div>
                        <h3 className="text-xl font-semibold  mb-1">Category</h3>
                        <p className="">{task.category}</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold  mb-1">Description</h3>
                        <p className=" whitespace-pre-line leading-relaxed">{task.description}</p>
                    </div>

                    <div className="mt-6 italic text-sm text-gray-500 flex items-center space-x-6">
                        <div tabIndex={0} role="button" className="avatar btn btn-ghost btn-circle">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={task?.photoURL} alt="" />
                            </div>
                        </div>
                        <p>
                            Posted by <span className="font-semibold text-indigo-600">{task.name}</span> ({task.email})
                        </p>
                    </div>
                </div>

                <div className="md:w-80 bg-indigo-50 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Place Your Bid</h2>

                    <div className="space-y-6 text-gray-700">
                        <div>
                            <h4 className="font-semibold mb-1">Deadline</h4>
                            <p className="text-lg">{new Date(task.deadline).toLocaleDateString()}</p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-1">Budget</h4>
                            <p className="text-lg font-semibold text-indigo-600">${task.budget.toLocaleString()}</p>
                        </div>
                    </div>

                    {
                        user.email === task.email ? (
                            <div>
                                <p className=" mt-2 text-red-500">This task was posted by you.</p>
                                <Link to={'/task/my-posted-task'}>
                                    <button
                                        className="mt-6 w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-lg transition"
                                    >
                                        See my posted task
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            <button
                                className="mt-6 w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-lg transition"
                                onClick={handlePlaceBid}
                            >
                                Place Bid
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;
