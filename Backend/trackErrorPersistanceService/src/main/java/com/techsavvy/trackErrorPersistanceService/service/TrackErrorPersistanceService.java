package com.techsavvy.trackErrorPersistanceService.service;


import com.techsavvy.trackErrorPersistanceService.dto.ErrorEventDto;
import com.techsavvy.trackErrorPersistanceService.model.ErrorEvent;
import com.techsavvy.trackErrorPersistanceService.repository.TrackErrorRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Slf4j
public class TrackErrorPersistanceService {


    @Autowired
    TrackErrorRepository trackErrorRepository;

    @PostMapping
    public void saveDocument(@RequestBody ErrorEventDto errorEventDto){
        ErrorEvent errorEvent = ErrorEvent
                .builder()
                .id(UUID.randomUUID().toString())
                .className(errorEventDto.getClassName())
                .serviceName(errorEventDto.getServiceName())
                .exceptionClass(errorEventDto.getExceptionClass())
                .stackTrace(errorEventDto.getStackTrace())
                .methodName(errorEventDto.getMethodName())
                .message(errorEventDto.getMessage())
                .timestamp(LocalDateTime.now())
                .build();
        trackErrorRepository.save(errorEvent);
    }

    @GetMapping
    public List<ErrorEventDto> getDocuments(){
        List<ErrorEvent> errorEvents= trackErrorRepository.findAll();
        return errorEvents.stream().map(this::mapDto).toList();
    }

    @GetMapping("/{id}")
    public ErrorEventDto getErrorById(@PathVariable String id) {
        Optional<ErrorEvent> errorEvents= trackErrorRepository.findById(id);
        ErrorEvent errorEvent= errorEvents.get();
        return ErrorEventDto.builder()
                .id(errorEvent.getId())
                .serviceName(errorEvent.getServiceName())
                .className(errorEvent.getClassName())
                .exceptionClass(errorEvent.getExceptionClass())
                .message(errorEvent.getMessage())
                .methodName(errorEvent.getMethodName())
                .stackTrace(errorEvent.getStackTrace())
                .timestamp(errorEvent.getTimestamp())
                .build();
    }
    private ErrorEventDto mapDto(ErrorEvent errorEvent) {
        return  ErrorEventDto.builder()
                .id(errorEvent.getId())
                .serviceName(errorEvent.getServiceName())
                .className(errorEvent.getClassName())
                .exceptionClass(errorEvent.getExceptionClass())
                .message(errorEvent.getMessage())
                .methodName(errorEvent.getMethodName())
                .timestamp(errorEvent.getTimestamp())
                .build();
    }
}
