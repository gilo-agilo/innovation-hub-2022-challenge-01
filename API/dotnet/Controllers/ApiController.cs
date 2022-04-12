﻿using System;
using System.IO;
using System.Linq;
using Amazon.S3;
using Amazon.S3.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace dotnet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApiController : ControllerBase
    {
        private readonly ILogger<ApiController> _logger;
        public ApiController(ILogger<ApiController> logger) => _logger = logger;
        

        [HttpGet("gettest")]
        public dynamic GetTest()
        {
            return new
            {
                Date = DateTime.Now,
		Responser = GetType().Name,
                Status = "Ok"
            };
        }
        [HttpPost()]
        public object FileUpload()
        {
            if (Request == null)
            {
                return "Request is null";
            }

            if (Request.Form == null)
            {
                return "Request->Form is null";
            }

            if (Request.Form.Files == null)
            {
                return "Request->Form->Files is null";
            }

            IFormFile file = Request.Form.Files.FirstOrDefault();

            if (file == null)
            {
                return "No files";
            }

            StreamReader reader = new StreamReader(file.OpenReadStream());

            var id = Guid.NewGuid().ToString();

            var content = reader.ReadToEnd();
            AmazonS3Client client = new AmazonS3Client();
            var result = client.PutObjectAsync(new PutObjectRequest
            {
                BucketName = "angular-simple-ui",
                Key = $"csvfiles/{id}",
                ContentBody = content
            }).Result;

            return new
            {
                url = $"https://angular-simple-ui.s3.eu-west-2.amazonaws.com/csvfiles/{id}"
            };
        }

    }
}
