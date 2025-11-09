package com.techsavvy.trackErrorPersistanceService.controller;


import com.techsavvy.trackErrorPersistanceService.dto.ErrorEventDto;
import com.techsavvy.trackErrorPersistanceService.model.ErrorEvent;
import com.techsavvy.trackErrorPersistanceService.repository.TrackErrorRepository;
import com.techsavvy.trackErrorPersistanceService.service.TrackErrorPersistanceService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@Slf4j
@RequestMapping("/api/errors")
@CrossOrigin(value = "http://localhost:5173")
public class TrackErrorPersistanceController {


    @Autowired
    TrackErrorPersistanceService trackErrorPersistanceService;

    @PostMapping
    public void saveDocument(@RequestBody ErrorEventDto errorEventDto){
        trackErrorPersistanceService.saveDocument(errorEventDto);
    }

    @GetMapping
    public List<ErrorEventDto> getDocuments(){
        return trackErrorPersistanceService.getDocuments();
    }

    @GetMapping("/{id}")
    public ErrorEventDto getErrorById(@PathVariable String id) {
        return trackErrorPersistanceService.getErrorById(id);
    }
}
