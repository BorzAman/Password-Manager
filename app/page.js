"use client";

import React, { useRef, useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { RiEdit2Fill } from "react-icons/ri";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Link from 'next/link';

// import { ModeToggle } from "./ModeToggle";

const Body = () => {
    const ref = useRef();
    const copyref = useRef();
    const passref = useRef();
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            let localData = localStorage.getItem("localData");
            if (localData) {
                setPasswordArray(JSON.parse(localData));
            }
        }
    }, []);

    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            const updatedPasswords = [...passwordArray, { ...form, id: uuidv4() }];
            setPasswordArray(updatedPasswords);
            localStorage.setItem("localData", JSON.stringify(updatedPasswords));
            setForm({ site: "", username: "", password: "" });
        }
    };

    const handleEye = () => {
        if (ref.current.src.includes("icon/close.svg")) {
            ref.current.src = "icon/eye.svg";
            passref.current.type = "password";
        } else {
            ref.current.src = "icon/close.svg";
            passref.current.type = "text";
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const deletePassword = (id) => {
        if (confirm("Do you really want to delete this data?")) {
            const filteredPasswords = passwordArray.filter((item) => item.id !== id);
            setPasswordArray(filteredPasswords);
            localStorage.setItem("localData", JSON.stringify(filteredPasswords));
        }
    };

    const editPassword = (id) => {
        setForm(passwordArray.find((item) => item.id === id));
        const filteredPasswords = passwordArray.filter((item) => item.id !== id);
        setPasswordArray(filteredPasswords);
    };

    const copyText = (text, type) => {
        navigator.clipboard.writeText(text);
        toast.success(`✅ ${type} copied!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Bounce,
        });
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} closeOnClick={false} pauseOnHover draggable theme="dark" transition={Bounce}/>


              <div className="p-3 mt-16 md:mycontainer min-h-[88.2vh]">
                <h1 className="text-4xl text font-bold text-center">
                    <span className="text-blue-500 ">&lt;</span>Pass<span className="text-blue-500">OP/&gt;</span>
                </h1>
                <p className="text-blue-900 text-lg text-center">Your own Password Manager</p>

                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder="Enter website URL" className=" rounded-full border border-blue-500 w-full md:w-2/3 p-4 py-1" type="text" name="site" />
                    <div className="flex flex-col md:flex-row w-full justify-center gap-8">
                        <input value={form.username} name="username" onChange={handleChange} placeholder="Enter Username" className="rounded-full border  border-blue-500 w-full md:w-1/2 p-4 py-1" type="text" />
                        <div className="relative">
                            <input ref={passref} value={form.password} onChange={handleChange} placeholder="Enter Password" className="rounded-full border  border-blue-500 w-full p-4 py-1" type="password" name="password" />
                            <span className="absolute right-[4px] top-[5px] cursor-pointer" onClick={handleEye}>
                                <img ref={ref} className=" p-1" width={26} src="icon/eye.svg" alt="eye" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className="flex justify-center font-mono items-center gap-2 bg-blue-400 hover:bg-blue-300 rounded-full px-8 py-2 w-fit border border-blue-900">
                        <img src="/icon/save.png" width={24} alt="save" />
                        Save
                    </button>
                </div>

                <div className="passwords">
                    <h2 className="font-serif text-2xl py-4 text-center mb-4">Your Passwords</h2>
                    {passwordArray.length === 0 && <div className="text-center mt-10">Fill The data.! <br /> (URL must be greater than 3)</div>}
                    {passwordArray.length !== 0 && (
                        <div className="w-full overflow-x-auto">
                            <div className="mx-auto md:flex md:justify-center  overflow-x-auto">
                                <table className="table-auto rounded-lg overflow-hidden border-collapse min-w-[400px]">
                                    {/* Table Header */}
                                    <thead className="bg-blue-800 text-white text-xs md:text-sm">
                                        <tr>
                                            <th className="px-4 py-2 text-center border-b min-w-[120px]">Websites</th>
                                            <th className="px-4 py-2 text-left border-b min-w-[60px]">User Name</th>
                                            <th className="px-4 py-2 text-left border-b min-w-[60px]">Password</th>
                                            <th className="px-4 py-2 text-left border-b min-w-[60px]">Action</th>
                                        </tr>
                                    </thead>

                                    {/* Table Body */}
                                    <tbody className="bg-blue-100 text-xs md:text-sm">
                                        {passwordArray.map((item) => (
                                            <tr key={item.id}>
                                                {/* Website Column */}
                                                <td className="px-4 py-2 text-left truncate break-words min-w-[120px]">
                                                    <a href={item.site} className="text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">
                                                        {item.site}
                                                    </a>
                                                </td>

                                                {/* Username Column */}
                                                <td className="px-4 py-2 text-left min-w-[60px]">
                                                    <div className="flex items-center space-x-2">
                                                        <span>{item.username}</span>
                                                        <FaCopy className="text-sm cursor-pointer" onClick={() => copyText(item.username, "Username")} />
                                                    </div>
                                                </td>

                                                {/* Password Column */}
                                                <td className="px-4 py-2 text-left min-w-[60px]">
                                                    <div className="flex items-center space-x-2">
                                                        <span>{"*".repeat(item.password.length)}</span>
                                                        <FaCopy className="text-sm cursor-pointer" onClick={() => copyText(item.password, "Password")} />
                                                    </div>
                                                </td>

                                                {/* Action Column */}
                                                <td className="px-4 py-2 text-left min-w-[60px]">
                                                    <div className="flex items-center space-x-2">
                                                        <RiEdit2Fill className="text-sm cursor-pointer" onClick={() => editPassword(item.id)} />
                                                        <AiFillDelete className="text-sm cursor-pointer" onClick={() => deletePassword(item.id)} />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>    
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>        
        </>
    );
};

export default Body;
