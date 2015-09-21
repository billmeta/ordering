package com.maha.orderingapp.endpoints.webrest.controllers;

import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;


import java.util.Collection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.maha.orderingapp.service.ProductService;
import com.maha.orderingapp.domain.Product;

@Controller
@RequestMapping("/product")
public class ProductRestController
{
	@Autowired
	private ProductService productService;
	
	@RequestMapping(
		value = "/search/name/{name}",
		method = RequestMethod.GET,
		headers = "Accept=application/json")
	@ResponseStatus(value = HttpStatus.CREATED)
	@ResponseBody
	public Collection<Product> getProducts(
		@PathVariable final String name, 
		final HttpServletRequest request,
		final HttpServletResponse response
	) throws Exception 
	{
		return productService.getProducts(name);
	}
}

