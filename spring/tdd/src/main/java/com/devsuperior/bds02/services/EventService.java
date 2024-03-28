package com.devsuperior.bds02.services;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.bds02.dto.EventUpdateDTO;
import com.devsuperior.bds02.entities.City;
import com.devsuperior.bds02.entities.Event;
import com.devsuperior.bds02.repositories.EventRepository;

@Service
public class EventService {

	@Autowired
	private EventRepository eventRepository;

	@Autowired
	private CityService cityService;
	
	public Event getById(Long id) {
		Event event = eventRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return event;
	}

	public Event update(Long id, EventUpdateDTO updateDto) {
		try {
			Event entity = eventRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
			City city = cityService.get(updateDto.getCityId());
			entity.setName(updateDto.getName());
			entity.setDate(updateDto.getDate());
			entity.setUrl(updateDto.getUrl());
			entity.setCity(city);
			entity = eventRepository.save(entity);
			return entity;
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id " + id + " not found ");
		}
	}
}
