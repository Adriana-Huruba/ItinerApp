package com.itinera.itinerary_service.service;

import com.itinera.itinerary_service.model.ItineraryItem;
import com.itinera.itinerary_service.repository.ItineraryItemRepository;
import org.springframework.stereotype.Service;

@Service
public class ItineraryItemService {
    private final ItineraryItemRepository itineraryItemRepository;

    public ItineraryItemService(ItineraryItemRepository repository) {
        this.itineraryItemRepository = repository;
    }

    public ItineraryItem addItem(ItineraryItem item) {
        return itineraryItemRepository.save(item);
    }
}
