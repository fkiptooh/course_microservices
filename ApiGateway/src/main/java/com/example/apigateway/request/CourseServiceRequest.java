package com.example.apigateway.request;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@FeignClient(
        value = "course-service", //application name
        path = "/api/course",
        //url = "${course.service.url}",
        configuration = FeignConfiguration.class
)
public interface CourseServiceRequest
{
    @PostMapping
    Object saveCourse(@RequestBody Object requestBody);


    @DeleteMapping("{courseId}")
    void deleteCourse(@PathVariable("courseId") Long courseId);

    @GetMapping
    List<Object> getAllCourses();
}
