package com.cesarpa.springbootecommerce.config;

import com.cesarpa.springbootecommerce.entity.Product;
import com.cesarpa.springbootecommerce.entity.ProductCategory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.EntityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {


    private EntityManager entityManager;

    @Autowired
    public MyDataRestConfig (EntityManager theEntotyManager){
        entityManager = theEntotyManager;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors){


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


        // call an internal helper method
        exposeIds(config);

    }

    private void exposeIds(RepositoryRestConfiguration config){
        // expose entity ids

        // get a list of entity classes from the entity manager
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();

        List<Class> entityClasses = new ArrayList<>();
        for (EntityType entity: entities) {
            entityClasses.add(entity.getJavaType());
        }

        // expose the entity ids for the array entity domain in oder to return the id on the json
        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);


    }
}
