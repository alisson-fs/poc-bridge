package br.alisson.poc

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class PoCBridgeApplication

fun main(args: Array<String>) {
	runApplication<PoCBridgeApplication>(*args)
}
