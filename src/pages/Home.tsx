
import TopForm from '../components/TopForm'

const Home = () => {
    return (
        <div className='flex flex-col justify-center gap-12 items-center h-screen bg-yellow-500 shadow-2xl'>
            <p className='text-center px-32 text-lg font-Viga '>In unserer ToDo-App steht Organisation an erster Stelle. Wir bieten Ihnen eine intuitive und benutzerfreundliche Plattform, um Ihre Aufgaben mühelos zu verwalten. Unsere App ermöglicht es Ihnen, Aufgaben zu erstellen, Prioritäten festzulegen, Fristen zu setzen und Aufgaben mit anderen zu teilen. Mit benutzerdefinierten Kategorien und Filtern können Sie Ihre ToDo-Liste individuell anpassen und behalten stets den Überblick über anstehende Aufgaben. Wir sind bestrebt, Ihre Produktivität zu steigern und Ihnen zu helfen, Ihre Ziele zu erreichen. Probieren Sie unsere ToDo-App aus und erleben Sie eine effiziente Art der Aufgabenverwaltung!</p>
            <TopForm />
        </div>
    )
}

export default Home
