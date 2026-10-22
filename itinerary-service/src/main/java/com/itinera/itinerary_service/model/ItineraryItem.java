package com.itinera.itinerary_service.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "itinerary_item")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ItineraryItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "trip_id")
    @JsonProperty("tripId")
    private Long tripId;

    @Column(name = "place_id")
    @JsonProperty("placeId")
    private Long placeId;

    @Column(name = "visit_date", nullable = false)
    @JsonProperty("visitDate")
    private LocalDate visitDate;

    @Column(name = "start_time")
    @JsonProperty("startTime")
    private LocalTime startTime; // sau LocalDateTime

    @Column(name = "end_time")
    @JsonProperty("endTime")
    private LocalTime endTime;   // sau LocalDateTime

    private String notes;

    @Column(name = "estimated_cost")
    @JsonProperty("estimatedCost")
    private Double estimatedCost;
}