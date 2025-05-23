import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const TaskDetails = () => {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const { user } = use(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:3000/task/${id}`)
            .then(res => res.json())
            .then(data => setTask(data));
    }, [id]);

    if (!task) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg text-gray-500">Loading task details...</p>
            </div>
        );
    }

    console.log(task);

    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden md:flex">

                {/* Left section: Task info */}
                <div className="md:flex-1 p-8 space-y-6">
                    <h1 className="text-4xl font-extrabold text-indigo-700">{task.title}</h1>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-1">Category</h3>
                        <p className="text-gray-600">{task.category}</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-1">Description</h3>
                        <p className="text-gray-600 whitespace-pre-line leading-relaxed">{task.description}</p>
                    </div>

                    <div className="mt-6 italic text-sm text-gray-500 flex items-center space-x-6">
                        <div tabIndex={0} role="button" className="avatar btn btn-ghost btn-circle">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} alt="User" />
                            </div>
                        </div>
                        <p>
                            Posted by <span className="font-semibold text-indigo-600">{task.name}</span> ({task.email})
                        </p>
                    </div>
                </div>

                {/* Right section: Bid box */}
                <div className="md:w-80 bg-indigo-50 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Place Your Bid</h2>

                    <div className="space-y-6 text-gray-700">
                        <div>
                            <h4 className="font-semibold mb-1">Deadline</h4>
                            <p className="text-lg">{new Date(task.deadline).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-1">Budget</h4>
                            <p className="text-lg font-semibold text-indigo-600">${task.budget.toLocaleString()}</p>
                        </div>
                    </div>

                    <button
                        className="mt-10 w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-lg transition"
                        onClick={() => alert('Bid functionality coming soon!')}
                    >
                        Place Bid
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;
