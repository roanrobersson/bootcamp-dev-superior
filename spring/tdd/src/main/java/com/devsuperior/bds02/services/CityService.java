package com.devsuperior.bds02.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.devsuperior.bds02.controllers.exeptions.DatabaseException;
import com.devsuperior.bds02.dto.CityInsertDTO;
import com.devsuperior.bds02.entities.City;
import com.devsuperior.bds02.repositories.CityRepository;


@Service
public class CityService {

	@Autowired
	private CityRepository cityRepository;

	public City get(Long id) {
		City city = cityRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return city;
	}

	public List<City> findAll(Sort sort) {
		return cityRepository.findAll(sort);
	}
	
	public City create(CityInsertDTO insertDto) {
		City entity = insertDto.toEntity();
		entity = cityRepository.save(entity);
		return entity;
	}
	
	public void delete(Long id) {
			try {
				 cityRepository.deleteById(id);
			}
			catch (EmptyResultDataAccessException e) {
				throw new ResourceNotFoundException("Id " + id + " not found ");
			}
			catch (DataIntegrityViolationException e) {
				throw new DatabaseException("Integrity violation");
			}
	}
}

