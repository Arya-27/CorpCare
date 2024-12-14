import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [panel, setPanel] = useState('admin'); // Default to Admin Panel

  // Set email and password based on panel selection
  const handlePanelSwitch = (selectedPanel) => {
    setPanel(selectedPanel);
    if (selectedPanel === 'admin') {
      setEmail('admin@me.com');
      setPassword('123');
    } else if (selectedPanel === 'employee') {
      setEmail('e@e.com');
      setPassword('123');
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="border-2 rounded-xl border-gray-700 p-10 shadow-lg bg-gray-800">
        <h2 className="text-center text-2xl font-bold text-white mb-6">Hey There! 🖐🏻</h2>

        {/* Buttons to switch between Admin and Employee panels */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => handlePanelSwitch('admin')}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
              panel === 'admin' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Admin Panel
          </button>
          <button
            onClick={() => handlePanelSwitch('employee')}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
              panel === 'employee' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Employee Panel
          </button>
        </div>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-gray-600 text-white font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 transition duration-300 focus:border-blue-500"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-gray-600 text-white font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400 transition duration-300 focus:border-blue-500"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-7 text-white border-none outline-none hover:bg-blue-600 font-semibold bg-blue-500 text-lg py-2 px-8 w-full rounded-full transition duration-300">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
