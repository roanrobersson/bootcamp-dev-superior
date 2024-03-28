package com.devsuperior.dsclient.services.exceptions;

import java.util.NoSuchElementException;

public class ResourceNotFoundException extends NoSuchElementException{
	private static final long serialVersionUID = 1L;
	
	public ResourceNotFoundException(String msg) {
		super(msg);
	}
}
