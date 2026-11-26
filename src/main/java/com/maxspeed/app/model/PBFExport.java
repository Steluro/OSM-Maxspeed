package com.maxspeed.app.model;

import lombok.Builder;

@Builder
public record PBFExport( 
    byte[] content
){}