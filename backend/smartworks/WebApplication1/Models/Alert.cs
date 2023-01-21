namespace WebApplication1.Models
{
    public class Alert
    {
        public string id { get; set; }
        public string description { get; set; }
        public string date { get; set; }
        public string type { get; set; }
        public int priority { get; set; }
        public string user { get; set; }
        public int projectNumber { get; set; }
        public bool isCompleted { get; set; }
    }
}
