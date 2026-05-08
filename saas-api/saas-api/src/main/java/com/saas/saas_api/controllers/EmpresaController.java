package com.saas.saas_api.controllers;

import com.saas.saas_api.entities.Empresa;
import com.saas.saas_api.repositories.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/empresas")
public class EmpresaController {
    @Autowired
    private EmpresaRepository empresaRepository; // O tu EmpresaService si lo creaste

    @PostMapping
    public Empresa crearEmpresa(@RequestBody Empresa empresa) {
        return empresaRepository.save(empresa);
    }

    @GetMapping
    public List<Empresa> listar() {
        return empresaRepository.findAll();
    }
}
