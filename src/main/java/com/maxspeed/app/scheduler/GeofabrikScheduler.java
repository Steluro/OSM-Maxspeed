package com.maxspeed.app.scheduler;

import com.maxspeed.app.service.GeofabrikService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@Slf4j
@RequiredArgsConstructor
public class GeofabrikScheduler {

    private final GeofabrikService geofabrikService;

    @Scheduled(cron = "*/10 * * * * *", zone = "Europe/Paris")
    public void run() {
        log.info("Geofabrik scheduler is starting");
        geofabrikService.fetchData().block();
    }
}
