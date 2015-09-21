package com.maha.orderingapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import com.maha.orderingapp.repo.ProductRepo;
import java.util.Collection;
import org.springframework.stereotype.Service;
import com.maha.orderingapp.domain.Product;

@Service("productService")
public class ProductServiceImpl implements ProductService
{
	@Autowired
	private ProductRepo productRepo;
	
	public Collection<Product> getProducts(String name)
	{
		return productRepo.getProducts(name);
	}
}