package com.enbike2.enbike;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


@SpringBootApplication

public class EnbikeApplication extends SpringBootServletInitializer{
       @Override
       protected SpringApplicationBuilder configure(SpringApplicationBuilder app){
           return app.sources(EnbikeApplication.class);
       }
	public static void main(String[] args) {
		SpringApplication.run(EnbikeApplication.class, args);
	}

}
