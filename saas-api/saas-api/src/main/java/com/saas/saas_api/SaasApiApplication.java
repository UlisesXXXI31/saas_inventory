package com.saas.saas_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class SaasApiApplication {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public static void main(String[] args) {
        SpringApplication.run(SaasApiApplication.class, args);
    }

    @Bean
    public CommandLineRunner initDatabase() {
        return args -> {
            System.out.println("--- INICIANDO LIMPIEZA DE BASE DE DATOS ---");
            try {
                // Esto vacía las tablas y resetea los IDs a 1
                jdbcTemplate.execute("TRUNCATE TABLE productos, empresas RESTART IDENTITY CASCADE");
                System.out.println("✅ ÉXITO: Tablas vaciadas e IDs reiniciados a 1");
            } catch (Exception e) {
                System.out.println("❌ ERROR AL LIMPIAR: " + e.getMessage());
            }
        };
    }
}