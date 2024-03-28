package com.devsuperior.bds02.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.bds02.dto.EventDTO;
import com.devsuperior.bds02.dto.EventUpdateDTO;
import com.devsuperior.bds02.entities.Event;
import com.devsuperior.bds02.services.EventService;

@RestController()
@RequestMapping(value = "/events")
public class EventController {

	@Autowired
	private EventService eventService;
	
	
	@GetMapping(value = "/{id}", produces = "application/json")
	public ResponseEntity<EventDTO> getById(@PathVariable Long id) {
		Event entity = eventService.getById(id);
		EventDTO dto = new EventDTO(entity);
		return ResponseEntity.ok().body(dto);
	}

	@PutMapping(value = "/{id}", produces="application/json")
	public ResponseEntity<EventDTO> update(@PathVariable Long id, @RequestBody EventUpdateDTO updateDto) {
		Event entity = eventService.update(id, updateDto);
		EventDTO responseDto = new EventDTO(entity);
		return ResponseEntity.ok().body(responseDto);
	}
	
}
