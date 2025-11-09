package com.techsavvy.trackErrorPersistanceService.repository;

import com.techsavvy.trackErrorPersistanceService.model.ErrorEvent;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TrackErrorRepository extends MongoRepository<ErrorEvent, String> {
}
