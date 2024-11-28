package com.back.chef_em_casa_back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.back.chef_em_casa_back.entity.Labels;

@Repository
public interface LabelsRepository extends JpaRepository<Labels, String> {
    
}
