package com.maha.orderingapp.repo;

import java.util.Collection;
import com.maha.orderingapp.domain.Product;

public interface ProductRepo
{
	public Collection<Product> getProducts(String name);
}
