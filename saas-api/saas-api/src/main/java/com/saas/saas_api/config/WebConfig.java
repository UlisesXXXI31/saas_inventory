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
            .allowedOriginPatterns("*") // Usa patterns en lugar de allowedOrigins si vas a usar credenciales
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
            .allowedHeaders("*")
            .allowCredentials(true) // Ahora sí funcionará con el pattern "*"
            .maxAge(3600);
}
}