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
    [Route("api/configuration")]
    [ApiController]
    public class ConfigurationController : ControllerBase
    {
        private readonly IConfigurationRepository _configRepository;
        public ConfigurationController(IConfigurationRepository configRepository)
        {
            _configRepository = configRepository;
        }

        [HttpGet]
        public ActionResult<ConfigEntity> Get()
        {
            return _configRepository.GetConfiguration();
        }

        [HttpGet("tasktype/{id}")]
        public ActionResult<TaskType> GetTaskType(string id)
        {
            var taskType = _configRepository.GetTaskTypeById(id);
            if (taskType == null)
                return NotFound();
            return taskType;
        }

        [HttpGet("taskpriority/{id}")]
        public ActionResult<TaskPriority> GetTaskPriority(string id)
        {
            var taskPriority = _configRepository.GetTaskPriorityById(id);
            if (taskPriority == null)
                return NotFound();
            return taskPriority;
        }


        [HttpPost("taskListTypes")]
        public ActionResult AddTaskType(TaskType taskType)
        {
            try
            {
                _configRepository.AddTaskType(taskType);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("taskListTypes")]
        public ActionResult UpdateTaskType(TaskType taskType)
        {
            try
            {
                _configRepository.UpdateTaskType(taskType);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("taskListTypes/{id}")]
        public ActionResult DeleteTaskType(string id)
        {
            try
            {
                _configRepository.DeleteTaskType(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }


        [HttpPost("taskListPriority")]
        public ActionResult AddTaskPriority(TaskPriority taskPriority)
        {
            try
            {
                _configRepository.AddTaskPriority(taskPriority);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("taskListPriority")]
        public ActionResult UpdateTaskPriority(TaskPriority taskPriority)
        {
            try
            {
                _configRepository.UpdateTaskPriority(taskPriority);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete("taskListPriority/{id}")]
        public ActionResult DeleteTaskPriority(string id)
        {
            try
            {
                _configRepository.DeleteTaskPriority(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

    }
}


