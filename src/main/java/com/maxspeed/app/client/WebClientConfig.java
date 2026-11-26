package com.maxspeed.app.client;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {

    @Bean
    public WebClient geofabrikWebClient() {
        return WebClient.builder()
                .baseUrl("https://download.geofabrik.de")
                .codecs(configurer ->
                    configurer.defaultCodecs()
                        .maxInMemorySize(100 * 1024 * 1024))
                .build();
    }
}