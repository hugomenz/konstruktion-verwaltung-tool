using System.Collections.Generic;

namespace server.Models
{
    public class ProjectEntity
    {
        public string id { get; set; }
        public int projectNumber { get; set; }
        public string description { get; set; }
        public string customer { get; set; }
        public string state { get; set; }
        public bool isActive { get; set; }
        public string designer { get; set; }
        public List<AlertEntity> alertList{get; set;}
        public List<TaskEntity> taskList { get; set;}
        }
}
