using System.Collections.Generic;


namespace server.Models
{
    public class ConfigEntity
    {
        public List<TaskType> taskListTypes { get; set; }
        public List<TaskPriority> taskListPriority { get; set; }
    }
}
