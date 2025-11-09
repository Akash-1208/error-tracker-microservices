package com.techsavvy.trackErrorPersistanceService.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ErrorEventDto {

    private String id;
    private String serviceName;
    private String className;
    private String methodName;
    private String exceptionClass;
    private String message;
    private String stackTrace;
    private LocalDateTime timestamp;
}
