package com.saas.saas_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SaasApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(SaasApiApplication.class, args);
	}
	
	@Bean
    public CommandLineRunner initDatabase() {
        return args -> {
            System.out.println("--- INICIANDO LIMPIEZA DE BASE DE DATOS ---");
            try {
                // Ejecutamos el comando SQL que resetea todo
                jdbcTemplate.execute("TRUNCATE TABLE productos, empresas RESTART IDENTITY CASCADE");
                System.out.println("✅ ÉXITO: Tablas vaciadas e IDs reiniciados a 1");
            } catch (Exception e) {
                System.out.println("❌ ERROR: " + e.getMessage());
            }
        };
	}

}
