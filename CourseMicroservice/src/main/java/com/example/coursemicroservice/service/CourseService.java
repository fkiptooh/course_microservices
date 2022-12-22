package com.example.coursemicroservice.service;

import com.example.coursemicroservice.model.Course;

import java.util.List;

public interface CourseService {
    //save course
    Course saveCourse(Course course);

    //delete by id
    void deleteCourse(Long courseId);

    //find all courses
    List<Course> getAllCourses();
}
