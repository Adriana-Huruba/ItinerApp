package com.itinera.itinerary_service.controller;

import com.itinera.itinerary_service.model.ItineraryItem;
import com.itinera.itinerary_service.repository.ItineraryItemRepository;
import com.itinera.itinerary_service.service.ItineraryItemService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/api/itinerary-items")
public class ItineraryController {
    private ItineraryItemService itineraryItemService;

    @Autowired
    public ItineraryController(ItineraryItemService itineraryItemService) {
        this.itineraryItemService = itineraryItemService;
    }

    @PostMapping("/add")
    public ResponseEntity<ItineraryItem> addItem(@Valid @RequestBody ItineraryItem item) {
        ItineraryItem createdItem = itineraryItemService.addItem(item);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdItem);
    }
}
