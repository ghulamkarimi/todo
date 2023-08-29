import React, { createContext, useState } from "react";


export interface ITask {
    title: string;
    id: string;
    done: boolean;
}
interface IApp {
    position: string;
    setPosition: (position: string) => void;
    items: ITask[];
    setItems: React.Dispatch<React.SetStateAction<ITask[]>>;
    task: string;
    setTask: (task: string) => void;
    isButtonActive: boolean;
    setIsButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
    idPerson: string;
    setIdPerson: (idPerson: string) => void;
}

export interface IAppProvider {
    children: React.ReactNode;
}
export const AppContext = createContext<IApp>({} as IApp);



export const AppContextProvider: React.FC<IAppProvider> = ({ children }) => {

    const [items, setItems] = useState<ITask[]>([]);
    const [position, setPosition] = useState<string>("hinzufugen")
    const [idPerson, setIdPerson] = useState<string>("")
    const [task, setTask] = useState<string>("");
    const [isButtonActive, setIsButtonActive] = useState(true);
    return (
        <AppContext.Provider
            value={{
                items, setItems,
                task, setTask,
                isButtonActive, setIsButtonActive,
                position, setPosition,
                idPerson,
                setIdPerson

            }}>
            {children}
        </AppContext.Provider>
    )

}