using WebApplication1.Models;

namespace WebApplication1.Contracts
{
    public interface IProjectRepository
    {
        List<Project> GetProjectList();
    }
}
