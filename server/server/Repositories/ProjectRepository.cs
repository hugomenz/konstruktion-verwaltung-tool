using server.Contracts;
using server.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Numerics;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Mvc;

namespace server.Repositories
{
    public class ProjectRepository : IProjectRepository
    {
        const string JSON_PATH = @"C:\Users\Hugo_\Documents\fullStack\konstruktion-verwaltung-tool\server\server\Resources\json.json";
        public void AddProject(ProjectEntity projectObj)
        {
            var projectList = GetProjectList();
            var projectExists = projectList.Exists((p => p.id == projectObj.id));

            if (projectExists)
            {
                throw new Exception("Project with that ID already exists!");
            }
            projectList.Add(projectObj);
            UpdateProjectList(projectList);
        }

        public void DeleteProject(string id)
        {
            var projectList = GetProjectList();
            var projectIndex = projectList.FindIndex(p => p.id == id);

            if (projectIndex < 0)
                throw new Exception("Project does not exist");

            projectList.RemoveAt(projectIndex);
            UpdateProjectList(projectList);
        }

        public ProjectEntity GetProjectById(string id)
        {
            try
            {
                var projectList = GetProjectList();
                var project = projectList.FirstOrDefault(p => p.id == id);
                return project;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<ProjectEntity> GetProjectList()
        {
            try
            {
                var projectListFromFile = GetDataFromFile();
                var response = JsonConvert.DeserializeObject<Response>(projectListFromFile);
                return response.project_list;

            }
            catch (Exception)
            {
                throw;
            }
        }

        private void UpdateProjectList(List<ProjectEntity> projectList)
        {
            var projectListJson = JsonConvert.SerializeObject(projectList, Formatting.Indented);
            File.WriteAllText(JSON_PATH, projectListJson);
        }

        private string GetDataFromFile()
        {
            var json = File.ReadAllText(JSON_PATH);
            return json;
        }

        public void UpdateProject(ProjectEntity project)
        {
            var projectList = GetProjectList();
            var projectIndex = projectList.FindIndex(a => a.id == project.id);

            if (projectIndex < 0)
                throw new Exception("Project not found");

            projectList[projectIndex] = project;
            UpdateProjectList(projectList);
        }

    }
}
