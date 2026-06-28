package com.tasktracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tasktracker.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}