package com.cesarpa.springbootecommerce.dao;

import com.cesarpa.springbootecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
