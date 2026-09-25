import ProjectsSideBar from "./components/ProjectsSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {

    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    });

    const handleAddTask = (text) => {

        setProjectState(prevState => {
            const taskId = Math.random();
            const newTask = {
                text: text,
                projectId: prevState.selectedProjectId,
                id: taskId
            };

            return {
                ...prevState,
                tasks: [newTask, ...prevState.tasks]
            };
        });
    };

    const handleDeleteTask = (id) => {

        setProjectState(prevState => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter(
                    task => task.id !== id
                )
            }
        });
    };

    const handleSelectProject = (id) => {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: id,
            }
        });
    };

    const handleStartAddProject = () => {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null,
            }
        })
    };

    const handleCancelAddProject = () => {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            }
        })
    };

    const handleAddProject = (projectData) => {
        setProjectState(prevState => {
            const projectId = Math.random();
            const newProject = {
                ...projectData,
                id: projectId
            };

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject]
            };
        });
    };

    const handleDeleteProject = () => {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(
                    project => project.id !== prevState.selectedProjectId
                )
            }
        });
    };

    const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);


    let content = <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks}
    />;

    if (projectState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
    } else if (projectState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSideBar
                onStartAddProject={handleStartAddProject}
                projects={projectState.projects}
                onSelectProject={handleSelectProject}
                selectedProjectId={projectState.selectedProjectId}
            />
            {content}
        </main>
    );
}

export default App;
