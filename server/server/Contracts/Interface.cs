using server.Models;


namespace server.Contracts
{
    public interface IProjectRepository
    {
        List<ProjectEntity> GetProjectList();
        ProjectEntity GetProjectById(int id);

        void AddTask(TaskEntity task);
        void UpdateTask(TaskEntity task);
        void DeleteTask(int id);

        void AddAlert(AlertEntity alert);
        void UpdateAlert(AlertEntity alert);
        void DeleteAlert(int id);
    }
}