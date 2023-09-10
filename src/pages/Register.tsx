import { useState, useContext } from 'react';
import { AiFillCheckCircle, AiFillWarning } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Register = () => {
    const navigate = useNavigate();
    const { setFullName, setEmail } = useContext(AppContext);
    const [fullName, setLocalFullName] = useState("");
    const [email, setLocalEmail] = useState("");
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const isNameValid = () => {
        const nameRegex = /^[A-Za-z\s]+$/;
        return nameRegex.test(fullName);
    };

    const isEmailValid = () => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };

    const onClickHandler = () => {
        if (isNameValid() && isEmailValid()) {
            setFullName(fullName); // Aktualisieren Sie den Wert in Ihrem AppContext
            setEmail(email); // Aktualisieren Sie den Wert in Ihrem AppContext
            setShowSuccess(true);
            setShowError(false);
            setTimeout(() => {
                navigate("/home");
            }, 3000);
        } else {
            setShowSuccess(false);
            setShowError(true);
        }
    }

    return (
        <div className="bg-yellow-400 h-screen flex justify-center items-center relative">
            <div className="bg-green-400 h-[400px] w-[600px] flex flex-col gap-4 justify-center items-center rounded-xl shadow-gray-700 ">
                <p className="mb-10">Bitte vervollständigen Sie Ihre Daten</p>

                <div className="flex bg-slate-400 p-4 gap-2 rounded-xl">
                    <p>Ihr Name :</p>
                    <input
                        className="registerinput bg-slate-400 outline-0 pl-1"
                        name='fullName'
                        type="text"
                        placeholder="schreib deinen Name"
                        value={fullName}
                        onChange={(e) => setLocalFullName(e.target.value)}
                    />
                </div>

                <div className="flex bg-slate-400 p-4 gap-2 rounded-xl">
                    <p>Ihre E-Mail :</p>
                    <input
                        className="registerinput bg-slate-400 outline-none pl-1"
                        name='email'
                        type="text"
                        placeholder="Shreib deine E-mail Adresse"
                        value={email}
                        onChange={(e) => setLocalEmail(e.target.value)}
                    />
                </div>

                <button className="mt-8 bg-slate-300 px-4 py-2 rounded-xl" onClick={onClickHandler}>Submit</button>

                {showError && (
                    <div className="bg-slate-300 justify-center flex items-center gap-4 px-6 py-1 rounded-lg absolute left-10 top-8">
                        <AiFillWarning className="text-4xl text-red-500" />
                        <p>Dies ist eine Fehlermeldung - Überprüfen Sie Ihre Daten!</p>
                    </div>
                )}

                {showSuccess && (
                    <div className="bg-slate-300 mt-2 flex justify-center items-center gap-4 px-6 py-1 rounded-lg absolute left-10 top-8">
                        <AiFillCheckCircle className="text-4xl text-green-500" />
                        <p>Dies ist eine Erfolgsmeldung - Ihre Daten wurden akzeptiert!</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Register;
