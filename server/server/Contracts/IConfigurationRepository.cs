using server.Models;

namespace server.Contracts
{
    public interface IConfigurationRepository
    {
        ConfigEntity GetConfiguration();
        TaskType GetTaskTypeById(string id);
        TaskPriority GetTaskPriorityById(string id);
        void AddTaskType(TaskType taskType);
        void UpdateTaskType(TaskType taskType);
        void DeleteTaskType(string id);
        void AddTaskPriority(TaskPriority taskPriority);
        void UpdateTaskPriority(TaskPriority taskPriority);
        void DeleteTaskPriority(string id);

    }
}
