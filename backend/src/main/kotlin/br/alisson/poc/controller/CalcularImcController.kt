package br.alisson.poc.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class CalcularImcController {
    @GetMapping("/calcularImc")
    fun calcularImc(): String {
        return "Hello World"
    }
}