package com.devsuperior.bds02.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.devsuperior.bds02.entities.Event;

public class EventUpdateDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private String name;
	private LocalDate date;
	private String url;
	private Long cityId;

	public EventUpdateDTO() {
	}

	public EventUpdateDTO(Long id, String name, LocalDate date, String url, Long cityId) {
		this.name = name;
		this.date = date;
		this.url = url;
		this.cityId = cityId;
	}

	public EventUpdateDTO(Event entity) {
		name = entity.getName();
		date = entity.getDate();
		url = entity.getUrl();
		cityId = entity.getCity().getId();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Long getCityId() {
		return cityId;
	}

	public void setCityId(Long cityId) {
		this.cityId = cityId;
	}
}
