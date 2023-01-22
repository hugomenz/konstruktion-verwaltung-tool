using server.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using server.Contracts;

namespace server.Repositories
{
    public class ConfigurationRepository : IConfigurationRepository
    {
        const string JSON_PATH = @"C:\Users\Hugo_\Documents\fullStack\konstruktion-verwaltung-tool\server\server\Resources\json.json";
        private string GetDataFromFile()
        {
            var json = File.ReadAllText(JSON_PATH);
            return json;
        }
        public ConfigEntity GetConfiguration()
        {
            try
            {
                var configurationFromFile = GetDataFromFile();
                var response = JsonConvert.DeserializeObject<Response>(configurationFromFile);
                return response.configuration;

            }
            catch (Exception)
            {
                throw;
            }
        }
        public TaskType GetTaskTypeById(string id)
        {
            var configuration = GetConfiguration();
            var taskType = configuration.taskListTypes.FirstOrDefault(x => x.id == id);
            return taskType;
        }
        public TaskPriority GetTaskPriorityById(string id)
        {
            var configuration = GetConfiguration();
            var taskPriority = configuration.taskListPriority.FirstOrDefault(x => x.id == id);
            return taskPriority;
        }
        public void AddTaskType(TaskType taskType)
        {
            var configuration = GetConfiguration();
            var taskTypeExists = configuration.taskListTypes.Exists(x => x.id == taskType.id);
            if (taskTypeExists)
            {
                throw new Exception("Task type with that ID already exists!");
            }
            configuration.taskListTypes.Add(taskType);
            UpdateConfiguration(configuration);
        }
        public void DeleteTaskType(string id)
        {
            var configuration = GetConfiguration();
            var taskTypeIndex = configuration.taskListTypes.FindIndex(x => x.id == id);
            if (taskTypeIndex < 0)
            {
                throw new Exception("Task type not found");
            }
            configuration.taskListTypes.RemoveAt(taskTypeIndex);
            UpdateConfiguration(configuration);
        }
        public void AddTaskPriority(TaskPriority taskPriority)
        {
            var configuration = GetConfiguration();
            var taskPriorityExists = configuration.taskListPriority.Exists((p => p.id == taskPriority.id));

            if (taskPriorityExists)
            {
                throw new Exception("Task priority with that ID already exists!");
            }
            configuration.taskListPriority.Add(taskPriority);
            UpdateConfiguration(configuration);
        }
        public void DeleteTaskPriority(string id)
        {
            var configuration = GetConfiguration();
            var taskPriorityIndex = configuration.taskListPriority.FindIndex(p => p.id == id);

            if (taskPriorityIndex < 0)
                throw new Exception("Task priority not found");

            configuration.taskListPriority.RemoveAt(taskPriorityIndex);
            UpdateConfiguration(configuration);
        }
        public void UpdateTaskType(TaskType taskType)
        {
            var configuration = GetConfiguration();
            var taskTypeIndex = configuration.taskListTypes.FindIndex(x => x.id == taskType.id);
            if (taskTypeIndex < 0)
            {
                throw new Exception("Task type not found");
            }
            configuration.taskListTypes[taskTypeIndex] = taskType;
            UpdateConfiguration(configuration);
        }
        public void UpdateTaskPriority(TaskPriority taskPriority)
        {
            var configuration = GetConfiguration();
            var taskPriorityIndex = configuration.taskListPriority.FindIndex(p => p.id == taskPriority.id);

            if (taskPriorityIndex < 0)
                throw new Exception("Task priority not found");

            configuration.taskListPriority[taskPriorityIndex] = taskPriority;
            UpdateConfiguration(configuration);
        }
        private void UpdateConfiguration(ConfigEntity configuration)
        {
            var configurationJson = JsonConvert.SerializeObject(configuration, Formatting.Indented);
            File.WriteAllText(JSON_PATH, configurationJson);
        }
    }
}
