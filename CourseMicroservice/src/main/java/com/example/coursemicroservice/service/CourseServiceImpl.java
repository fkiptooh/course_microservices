package com.example.coursemicroservice.service;

import com.example.coursemicroservice.model.Course;
import com.example.coursemicroservice.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CourseServiceImpl implements CourseService
{
    private final CourseRepository courseRepository;

    public CourseServiceImpl(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    //save course
    @Override
    public Course saveCourse(Course course)
    {
        course.setCreatedTime(LocalDateTime.now());
        return courseRepository.save(course);
    }

    //delete by id
    @Override
    public void deleteCourse(Long courseId)
    {
        courseRepository.deleteById(courseId);
    }

    //find all courses
    @Override
    public List<Course> getAllCourses()
    {
        return courseRepository.findAll();
    }
}
