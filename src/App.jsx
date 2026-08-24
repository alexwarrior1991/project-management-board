import ProjectsSideBar from "./components/ProjectsSideBar.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSideBar/>
            <NewProject/>
        </main>
    );
}

export default App;
