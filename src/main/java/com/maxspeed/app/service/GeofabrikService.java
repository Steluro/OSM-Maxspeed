package com.maxspeed.app.service;

import org.springframework.stereotype.Service;
import com.maxspeed.app.client.GeofabrikClient;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

@Service
@Slf4j 
@RequiredArgsConstructor 

public class GeofabrikService {

    public final GeofabrikClient geofabrikClient;

    public Mono<Void> fetchData(){
    
        return geofabrikClient.get()
                .flatMap(data -> Mono.fromCallable(() -> {
            
                    Path dossier = Paths.get("C:\\Users\\samso\\Documents\\A3\\openStreetmap\\random-test");
                    Path fichier = dossier.resolve("random.osm.pbf");  
                    
                    if (!Files.exists(fichier)){
                        Files.write(
                            fichier,
                            data.content(),
                            StandardOpenOption.CREATE,
                            StandardOpenOption.TRUNCATE_EXISTING
                        );
                    }
                    return null;      
                })).then();
    }
}
