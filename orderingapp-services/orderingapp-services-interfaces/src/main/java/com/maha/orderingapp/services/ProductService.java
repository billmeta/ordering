package com.maha.orderingapp.service;

import com.maha.orderingapp.repo.ProductRepo;
import java.util.Collection;
import com.maha.orderingapp.domain.Product;

public interface ProductService
{
	public Collection<Product> getProducts(String name);
}
