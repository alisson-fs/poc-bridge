package br.alisson.poc.model;

import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@NoArgsConstructor
@Entity
public class Imc {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@NotNull
	private Long id;

	@NotNull
	private Double altura;

	@NotNull
	private Double peso;

	@NotNull
	private Double imc;

	@NotNull
	private Instant data;

	public Imc(Double altura, Double peso, Double imc, Instant data) {
		this.altura = altura;
		this.peso = peso;
		this.imc = imc;
		this.data = data;
	}

	public Double getAltura() {
		return altura;
	}

	public Double getPeso() {
		return peso;
	}

	public Double getImc() {
		return imc;
	}

	public Instant getData() {
		return data;
	}
}
