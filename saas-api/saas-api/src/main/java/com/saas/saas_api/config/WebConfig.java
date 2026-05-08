package com.saas.saas_api.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${app.cors.allowed-origins}")
    private String allowedOrigins;

 @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") 
                // En lugar de "*", le damos los orígenes exactos permitidos de forma segura
                .allowedOrigins(
                    allowedOrigins,                            
                    "https://saas-inventory-h49i.onrender.com", 
                    "http://localhost:8080"                      
                )
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true) // Al usar orígenes explícitos arriba, esto JAMÁS volverá a fallar
                .maxAge(3600);
    }
}