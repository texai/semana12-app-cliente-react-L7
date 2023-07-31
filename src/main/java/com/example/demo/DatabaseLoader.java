package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final InstrumentoRepository repository;

	@Autowired
	public DatabaseLoader(InstrumentoRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Instrumento("Guitarra", "Instrumento de cuerda", "de madera, con una caja de resonancia y 6 cuerdas templadas"));
		this.repository.save(new Instrumento("Ukelele", "Instrumento de cuerda", "de madera, con una caja de resonancia pequeña y 4 cuerdas templadas"));
		this.repository.save(new Instrumento("Melódica", "Instrumento de viento", "teclado pequeño de 2 octavas, sonorizado por soplido"));

	}
}