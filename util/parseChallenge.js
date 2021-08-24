class parseChallenge {
    parseConsumo(stageProcess, talentos, tracking) {
        let body = {};
        switch (stageProcess) {
            case 1:
                body = {
                    codigo_remision: talentos[0].codigo_remision,
                    nombre_destinatario: talentos[0].nombre_destinatario,
                    dir_destinatario: talentos[0].dir_destinatario,
                    unidades: [{
                            etiqueta1d: talentos[0].unidades[0].etiqueta1d,
                            cantidad_checkpoints: 5,
                            tracking: [{
                                    checkpoint: tracking.data[0].checkpoint,
                                    tipo: tracking.data[0].tipo
                                },
                                {
                                    checkpoint: tracking.data[1].checkpoint,
                                    tipo: tracking.data[1].tipo
                                },
                                {
                                    checkpoint: tracking.data[2].checkpoint,
                                    tipo: tracking.data[2].tipo
                                },
                                {
                                    checkpoint: tracking.data[3].checkpoint,
                                    tipo: tracking.data[3].tipo
                                },
                                {
                                    checkpoint: tracking.data[4].checkpoint,
                                    tipo: tracking.data[4].tipo
                                }
                            ]
                        },
                        {
                            etiqueta1d: talentos[0].unidades[1].etiqueta1d,
                            cantidad_checkpoints: 3,
                            tracking: [{
                                    checkpoint: tracking.data[5].checkpoint,
                                    tipo: tracking.data[5].tipo
                                },
                                {
                                    checkpoint: tracking.data[6].checkpoint,
                                    tipo: tracking.data[6].tipo
                                },
                                {
                                    checkpoint: tracking.data[7].checkpoint,
                                    tipo: tracking.data[7].tipo
                                },
                            ]
                        }
                    ]
                }
                break;
            case 2:
                body = {
                    etiqueta: talentos[0][0].unidades[0].etiqueta1d,
                    informacion_guia: {
                        codigo_remision: talentos[0][0].codigo_remision,
                        nombre_destinatario: talentos[0][0].nombre_destinatario,
                        dir_destinatario: talentos[0][0].dir_destinatario,
                    },
                    cantidad_checkpoints: 5,
                    tracking: [{
                            checkpoint: tracking.data[0].checkpoint,
                            tipo: tracking.data[0].tipo
                        },
                        {
                            checkpoint: tracking.data[1].checkpoint,
                            tipo: tracking.data[1].tipo
                        },
                        {
                            checkpoint: tracking.data[2].checkpoint,
                            tipo: tracking.data[2].tipo
                        },
                        {
                            checkpoint: tracking.data[3].checkpoint,
                            tipo: tracking.data[3].tipo
                        },
                        {
                            checkpoint: tracking.data[4].checkpoint,
                            tipo: tracking.data[4].tipo
                        }
                    ]
                }
                break;
            default:
                body = {}
                break;
        }
        return body;
    }
}

export default parseChallenge;