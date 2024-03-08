package br.com.projeto.springboot.angular.api.controller;

import br.com.projeto.springboot.angular.api.model.Cliente;
import br.com.projeto.springboot.angular.api.repositiry.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin(origins = "*")
public class ClienteController {

    @Autowired
    private Repository acao;

    @PostMapping("/")
    public Cliente cadastrar(@RequestBody Cliente c) {
        return acao.save(c);
    }

    @GetMapping("/")
    public Iterable<Cliente> selecionar() {
        return acao.findAll();
    }

    @PutMapping("/")
    public Cliente editar(@RequestBody Cliente c) {
        return acao.save(c);
    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable Long id){
        acao.deleteById(id);
    }
}
