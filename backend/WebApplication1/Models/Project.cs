using System.Collections.Generic;

namespace WebApplication1.Models
{
    public class ProjectList
    {
        public string Id { get; set; }
        public int projectNumber { get; set; }
        public string description { get; set; }
        public string customer { get; set; }
        public string status { get; set; }
        public bool isActive { get; set; }
        public string designer { get; set; }
        public List<AlertList> alertList{get; set;}
        public List<TaskList> taskList { get; set;}
        }
}
