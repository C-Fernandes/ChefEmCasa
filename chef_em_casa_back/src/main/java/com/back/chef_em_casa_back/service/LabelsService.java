package com.back.chef_em_casa_back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.back.chef_em_casa_back.entity.Labels;
import com.back.chef_em_casa_back.repository.LabelsRepository;

@Service
public class LabelsService {

    @Autowired
    private LabelsRepository labelsRepository;

    public List<Labels> findAll() {

        List<Labels> labels = labelsRepository.findAll();
        return labels;
    }

}
