package com.maxspeed.app.client;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import com.maxspeed.app.model.PBFExport;

@Component
@RequiredArgsConstructor
public class GeofabrikClient {

    private final WebClient geofabrikWebClient;

    public Mono<PBFExport> get() {
        return geofabrikWebClient
                .get()
                .uri("/europe/france/guyane/guyane-261124.osm.pbf")
                .retrieve()
                .bodyToMono(byte[].class)
                .map(PBFExport::new);
    }
}