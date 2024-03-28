package com.devsuperior.bds02.dto;

import java.io.Serializable;

import com.devsuperior.bds02.entities.City;

public class CityInsertDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private String name;

	public CityInsertDTO() {
	}

	public CityInsertDTO(String name) {

		this.name = name;
	}

	public CityInsertDTO(City entity) {
		name = entity.getName();
	}
	
	public City toEntity() {
		City entity =  new City();
		entity.setName(this.name);
		return entity;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
