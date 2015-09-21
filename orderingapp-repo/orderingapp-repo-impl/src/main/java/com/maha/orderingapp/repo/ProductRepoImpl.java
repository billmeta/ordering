package com.maha.orderingapp.repo;

import java.util.Collection;
import com.maha.orderingapp.domain.Product;
import org.springframework.stereotype.Service;

@Service("productRepo")
public class ProductRepoImpl implements ProductRepo
{
	public Collection<Product> getProducts(String name)
	{
		return null;
	}
}
