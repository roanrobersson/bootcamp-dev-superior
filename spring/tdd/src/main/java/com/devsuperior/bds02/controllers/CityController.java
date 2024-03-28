package com.devsuperior.bds02.controllers;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.devsuperior.bds02.dto.CityDTO;
import com.devsuperior.bds02.dto.CityInsertDTO;
import com.devsuperior.bds02.entities.City;
import com.devsuperior.bds02.services.CityService;

@RestController
@RequestMapping(value = "/cities")
public class CityController {

	@Autowired
	private CityService cityService;

	@GetMapping(value = "/{id}", produces = "application/json")
	public ResponseEntity<CityDTO> getById(@PathVariable Long id) {
		City entity = cityService.get(id);
		CityDTO dto = new CityDTO(entity);
		return ResponseEntity.ok().body(dto);
	}

	@GetMapping(produces = "application/json")
	public ResponseEntity<List<CityDTO>> findAll(
			@RequestParam(value = "orderBy", defaultValue = "name") String orderBy) {
		List<City> entities = cityService.findAll(Sort.by(orderBy));
		List<CityDTO> dtos = entities.stream().map((x) -> new CityDTO(x)).collect(Collectors.toList());
		return ResponseEntity.ok().body(dtos);
	}

	@PostMapping(produces = "application/json")
	public ResponseEntity<CityDTO> create(@RequestBody CityInsertDTO insertDto) {
		City entity = cityService.create(insertDto);
		CityDTO responseDto = new CityDTO(entity);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(responseDto.getId()).toUri();
		return ResponseEntity.created(uri).body(responseDto);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		cityService.delete(id);
		return ResponseEntity.noContent().build();
	}
}
