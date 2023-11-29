import { useNavigate } from "react-router-dom";

const PollPage = () => {
    const navigate = useNavigate();

    const handleOptionOne = (e) => {
        e.preventDefault();

        // TODO: dispatch something

        navigate("/");
    };

    const handleOptionTwo = (e) => {
        e.preventDefault();

        // TODO: dispatch something
        navigate("/");
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-3xl font-bold mt-9">Poll by AUTHOR ID HERE</h1>

            <div className="flex justify-center">
                <img src={''} alt="Profile" className="h-24 w-24" />
            </div>

            <div className="flex justify-center">
                <h2 className="text-2xl font-bold mt-6">Would you rather?</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">

                <button onClick={handleOptionOne}
                    className="p-2 rounded-xl  hover:shadow-xl transition"
                >
                    <div>
                        <p className="font-bold mb-2">Option 1</p>
                        <p className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Click</p>
                    </div>
                </button>

                <button onClick={handleOptionTwo}
                    className="p-2 rounded-xl"
                >
                    <div>
                        <p className="font-bold mb-2">Option 2</p>
                        <p className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Click</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default PollPage;