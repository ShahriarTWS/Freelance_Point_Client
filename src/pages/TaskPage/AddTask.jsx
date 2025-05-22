import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Loading from '../Loading';

const AddTask = () => {
    const { user } = useContext(AuthContext);

    // Optional: Loading fallback if needed
    if (!user) {
        return <Loading></Loading>;
    }

    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const task = {
            title: form.title.value,
            category: form.category.value,
            description: form.description.value,
            deadline: form.deadline.value,
            budget: form.budget.value,
            email: user.email,
            name: user.displayName
        };
        console.log('Submitted Task:', task);
        // Submit to backend here
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 p-8 bg-base-200 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Add New Task</h2>
            <form onSubmit={handleAddTask} className="grid grid-cols-1 gap-5">
                {/* Task Title */}
                <div>
                    <label className="label font-semibold">Task Title</label>
                    <input type="text" name="title" className="input input-bordered w-full" required />
                </div>

                {/* Category */}
                <div>
                    <label className="label font-semibold">Category</label>
                    <select name="category" className="select select-bordered w-full" required>
                        <option value="" disabled selected>Select Category</option>
                        <option>Web Development</option>
                        <option>Design</option>
                        <option>Writing</option>
                        <option>Marketing</option>
                        <option>Data Entry</option>
                        <option>App Development</option>
                    </select>
                </div>

                {/* Description */}
                <div>
                    <label className="label font-semibold">Description</label>
                    <textarea name="description" className="textarea textarea-bordered w-full" rows="4" required></textarea>
                </div>

                {/* Deadline & Budget */}
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex-1">
                        <label className="label font-semibold">Deadline</label>
                        <input type="date" name="deadline" className="input input-bordered w-full" required />
                    </div>
                    <div className="flex-1">
                        <label className="label font-semibold">Budget ($)</label>
                        <input type="number" name="budget" className="input input-bordered w-full" min="0" required />
                    </div>
                </div>

                {/* User Email */}
                <div>
                    <label className="label font-semibold">Your Email</label>
                    <input type="email" className="input input-bordered w-full bg-base-100" value={user.email} readOnly />
                </div>

                {/* User Name */}
                <div>
                    <label className="label font-semibold">Your Name</label>
                    <input type="text" className="input input-bordered w-full bg-base-100" value={user.displayName} readOnly />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;
