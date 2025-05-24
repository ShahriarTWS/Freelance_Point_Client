import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import Loading from '../Loading';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';

const BrowseTasks = () => {
    const [tasks, setTasks] = useState([]);
    const { loading, setLoading } = use(AuthContext);



    useEffect(() => {
        setLoading(true);
        fetch('https://freelance-point-server.vercel.app/task')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
                setLoading(false);
            });
    }, [setLoading]);

    if (loading) {
        return <Loading />;
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center  mb-12">Explore Available Tasks</h1>
            <title>FreelancerPoint || Browse Task</title>
            <ScrollToTop></ScrollToTop>
            {tasks.length === 0 ? (
                ''
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tasks.map(task => (
                        <div
                            key={task._id}
                            className="bg-base-200 rounded-2xl shadow-lg border hover:shadow-xl transition p-6 flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="text-2xl font-semibold  mb-3">{task.title}</h2>
                                <p className=" mb-2"><span className="font-medium">Category:</span> {task.category}</p>
                                <p className=" mb-2"><span className="font-medium">Deadline:</span> {new Date(task.deadline).toLocaleDateString()}</p>
                                <p className=" font-semibold text-lg mb-4">💰 Budget: ${task.budget}</p>
                            </div>

                            <Link to={`/task/taskDetails/${task._id}`} className="mt-auto">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-200">
                                    See Details
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default BrowseTasks;
