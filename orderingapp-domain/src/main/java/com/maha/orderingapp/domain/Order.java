package com.maha.orderingapp.domain;

import java.util.Date;
import java.util.Collection;

public class Order
{
	private String id;
	private Customer customer;
	private Date purchaseDate;
	private Collection<Product> products;
	
	public String getId()
	{
		return id;
	}
	public void setId(String id)
	{
		this.id = id;
	}
	public Customer getCustomer()
	{
		return customer;
	}
	public void setCustomer(Customer customer)
	{
		this.customer = customer;
	}
	public Date getPurchaseDate()
	{
		return purchaseDate;
	}
	public void setPurchaseDate(Date purchaseDate)
	{
		this.purchaseDate = purchaseDate;
	}
	public Collection<Product> getProducts()
	{
		return products;
	}
	public void setProducts(Collection<Product> products)
	{
		this.products = products;
	}
}
