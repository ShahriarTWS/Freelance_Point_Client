import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UpdateTaskModal = ({ isOpen, onClose, taskId, user, onUpdateSuccess }) => {
    const [task, setTask] = useState(null);

    useEffect(() => {
        if (taskId && isOpen) {
            setTask(null); // reset previous task data
            fetch(`http://localhost:3000/task/${taskId}`)
                .then(res => res.json())
                .then(data => setTask(data))
                .catch(err => {
                    console.error('Failed to fetch task:', err);
                    Swal.fire("Error", "Failed to load task data", "error");
                });
        }
    }, [taskId, isOpen]);

    const handleUpdateTask = (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedTask = {
            title: form.title.value,
            category: form.category.value,
            description: form.description.value,
            deadline: new Date(form.deadline.value).toISOString(),
            budget: form.budget.value,
            email: user.email,
            name: user.displayName
        };

        console.log(updatedTask);

        fetch(`http://localhost:3000/task/${taskId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0 || data.matchedCount > 0) {
                    Swal.fire("Success", "Task updated successfully!", "success");
                    onUpdateSuccess();
                    onClose();
                } else {
                    Swal.fire("Info", "No changes made.", "info");
                }

            })
            .catch(err => {
                console.error("Update failed:", err);
                Swal.fire("Error", "Failed to update task.", "error");
            });
    };

    if (!isOpen || !task) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000060] bg-opacity-50">
            <div className="bg-base-200 max-w-3xl w-full p-8 rounded-2xl shadow-lg relative">
                <button onClick={onClose} className="absolute top-2 right-3 text-2xl font-bold text-gray-500 hover:text-red-500">×</button>
                <h2 className="text-3xl font-bold text-primary mb-6 text-center">Update Task</h2>

                <form onSubmit={handleUpdateTask} className="grid grid-cols-1 gap-5">
                    <div>
                        <label className="label font-semibold">Task Title</label>
                        <input type="text" name="title" defaultValue={task.title} className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label font-semibold">Category</label>
                        <select name="category" defaultValue={task.category} className="select select-bordered w-full" required>
                            <option disabled value="">Select Category</option>
                            <option>Web Development</option>
                            <option>Design</option>
                            <option>Writing</option>
                            <option>Marketing</option>
                            <option>Data Entry</option>
                            <option>App Development</option>
                        </select>
                    </div>

                    <div>
                        <label className="label font-semibold">Description</label>
                        <textarea name="description" defaultValue={task.description} className="textarea textarea-bordered w-full" rows="4" required></textarea>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="flex-1">
                            <label className="label font-semibold">Deadline</label>
                            <input
                                type="date"
                                name="deadline"
                                defaultValue={task.deadline?.split('T')[0]}
                                className="input input-bordered w-full"
                                required
                                min={new Date().toISOString().split('T')[0]}
                            />
                        </div>
                        <div className="flex-1">
                            <label className="label font-semibold">Budget ($)</label>
                            <input type="number" name="budget" defaultValue={task.budget} className="input input-bordered w-full" min="0" required />
                        </div>
                    </div>

                    <div>
                        <label className="label font-semibold">Your Email</label>
                        <input type="email" className="input input-bordered w-full bg-base-100" value={user.email} readOnly />
                    </div>

                    <div>
                        <label className="label font-semibold">Your Name</label>
                        <input type="text" className="input input-bordered w-full bg-base-100" value={user.displayName} readOnly />
                    </div>

                    <button type="submit" className="btn btn-primary w-full">Update Task</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateTaskModal;
