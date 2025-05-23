import React, { use, useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../pages/Loading';

const FeaturedTasks = () => {
    const data = useOutletContext();
    // console.log(data);

    const [tasks, setTasks] = useState([]);
    const { loading, setLoading, theme } = use(AuthContext);

    useEffect(() => {
        fetch('http://localhost:3000/task')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <Loading></Loading>;

    return (
        <section className={`py-10`}>
            <div className="w-10/12 mx-auto md:px-5">
                <h2 className="text-4xl font-bold mb-10">
                    Featured Tasks
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                    {tasks
                        .slice(0, 6)  // show only first 6 tasks
                        .map(task => (
                            <div
                                key={task._id}
                                className="bg-base-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition "
                            >
                                <h3 className="text-2xl font-semibold  mb-4"><span>{task.title}</span></h3>
                                <p className="text-base mb-4 flex justify-between"><span>Category:</span> <span>${task.category}</span></p>
                                <p className="text-base mb-4 flex justify-between"><span>Budget:</span> <span>${task.budget}</span></p>
                                <p className="text-base mb-4 flex justify-between"><span>Deadline:</span> <span>{new Date(task.deadline).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span></p>
                                <p className="text-xs text-gray-500 mb-4">Posted by {task.name}</p>
                                <Link to={`/task/taskDetails/${task._id}`} className='btn btn-block btn-primary'>View Details</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedTasks;