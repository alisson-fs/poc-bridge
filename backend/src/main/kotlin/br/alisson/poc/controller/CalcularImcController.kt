package br.alisson.poc.controller

import br.alisson.poc.ImcService
import br.alisson.poc.ImcUtils
import br.alisson.poc.model.ImcDto
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class CalcularImcController(private val service: ImcService) {
    @CrossOrigin(origins = ["http://localhost:3000"])
    @PostMapping("/calcularImc")
    fun calcularImc(@RequestBody values: ImcDto): ResponseEntity<String> {
        if (values.altura > 0.0 && values.peso > 0.0) {
            return ResponseEntity(service.calcularPersistirImc(values.altura, values.peso), HttpStatus.OK)
        } else {
            return ResponseEntity("Os valores devem ser maiores do que zero.", HttpStatus.BAD_REQUEST)
        }
    }
}