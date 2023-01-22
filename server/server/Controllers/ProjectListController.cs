using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using server.Contracts;
using server.Models;
using server.Repositories;

using System;
using System.Collections.Generic;
using System.IO;
using System.Numerics;
using System.Security.Cryptography.X509Certificates;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectListController : ControllerBase
    {
        private readonly IProjectRepository _projectRepository;
        public ProjectListController(IProjectRepository projectRepository)
        {
            _projectRepository = projectRepository;
        }
        [HttpGet]
        public ActionResult<List<ProjectEntity>> Get()
        {
            return _projectRepository.GetProjectList();
        }
        [HttpGet("{id}")]
        public ActionResult<ProjectEntity> GetProject(string id)
        {
            var project = _projectRepository.GetProjectById(id);
            if (project == null)
                return NotFound();
            return project;
        }

        [HttpPost]
        public ActionResult AddProject(ProjectEntity project)
        {
            try
            {
                _projectRepository.AddProject(project);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut]
        public ActionResult UpdateProject(ProjectEntity project)
        {
            try
            {
                _projectRepository.UpdateProject(project);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete("{id}")]
        public ActionResult DeleteProject(string id)
        {
            try
            {
                _projectRepository.DeleteProject(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
