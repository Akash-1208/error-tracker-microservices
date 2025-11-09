package com.techsavvy.trackErrorPersistanceService.model;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "error_events")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ErrorEvent {
    @Id
    private String id;
    private String serviceName;
    private String className;
    private String methodName;
    private String exceptionClass;
    private String message;
    private String stackTrace;
    private LocalDateTime timestamp;
}
