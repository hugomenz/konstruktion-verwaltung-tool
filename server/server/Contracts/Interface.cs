using server.Models;


namespace server.Contracts
{
    public interface IProjectRepository
    {
        List<ProjectEntity> GetProjectList();
        ProjectEntity GetProjectById(int id);

        void AddProject(ProjectEntity task);
        void UpdateProject(ProjectEntity task);
        void DeleteProject(int id);

    }
}