package com.cesarpa.springbootecommerce.config;

import com.cesarpa.springbootecommerce.entity.Product;
import com.cesarpa.springbootecommerce.entity.ProductCategory;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config){

        // disable the HTTP methods for product
        HttpMethod[] theUnsupportedActions = {HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE};
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure((metadata,httpMethod)-> httpMethod.disable(theUnsupportedActions))
                .withCollectionExposure((metadata,httpMethod)-> httpMethod.disable(theUnsupportedActions));

        // disable the HTTP methods for product-category
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure((metadata,httpMethod)-> httpMethod.disable(theUnsupportedActions))
                .withCollectionExposure((metadata,httpMethod)-> httpMethod.disable(theUnsupportedActions));


    }
}
