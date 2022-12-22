package com.example.coursemicroservice.repository;

import com.example.coursemicroservice.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
//    fieldBy+fieldName
}
