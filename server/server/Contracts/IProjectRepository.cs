using server.Models;


namespace server.Contracts
{
    public interface IProjectRepository
    {
        List<ProjectEntity> GetProjectList();
        ProjectEntity GetProjectById(string id);
        void AddProject(ProjectEntity task);
        void UpdateProject(ProjectEntity task);
        void DeleteProject(string id);

    }
}