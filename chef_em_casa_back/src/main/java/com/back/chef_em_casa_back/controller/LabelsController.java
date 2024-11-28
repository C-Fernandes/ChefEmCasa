package com.back.chef_em_casa_back.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.back.chef_em_casa_back.entity.Labels;
import com.back.chef_em_casa_back.service.LabelsService;

@RestController
@RequestMapping("/labels")
public class LabelsController {

    @Autowired
    private LabelsService labelService;


    @GetMapping("/")
     public ResponseEntity<List<Labels>> findAll() {

        try {
            List<Labels> labels = labelService.findAll();


            return ResponseEntity.ok(labels);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Collections.emptyList());

        }
    }
}
