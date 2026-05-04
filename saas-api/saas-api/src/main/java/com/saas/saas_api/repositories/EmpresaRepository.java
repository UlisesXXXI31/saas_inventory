package com.saas.saas_api.repositories;

import com.saas.saas_api.entities.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Long> {
    // No necesitas escribir nada aquí, JpaRepository ya trae el .save() y .findAll()
}