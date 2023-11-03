package br.alisson.poc.model;

import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@NoArgsConstructor
@Entity
@Table(name = "tb_imc")
public class Imc {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "co_imc", nullable = false, unique = true)
	private Long id;

	@Column(name = "nu_altura", nullable = false)
	private Double altura;

	@Column(name = "nu_peso", nullable = false)
	private Double peso;

	@Column(name = "nu_imc", nullable = false)
	private Double imc;

	@Column(name = "dt_data", nullable = false)
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
