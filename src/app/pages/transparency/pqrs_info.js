import React, { useState, useEffect } from 'react'
import { Drawer, RadioGroup, Radio, ButtonToolbar, Button, IconButton, Placeholder } from 'rsuite';

const styles = {
    radioGroupLabel: {
        padding: '8px 12px',
        display: 'inline-block',
        verticalAlign: 'middle'
    }
};
export const Pqrs_info = () => {
    const [size, setSize] = React.useState('sm');
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleOpen = key => {
        setOpen(true);
        setPlacement(key);
    };
    return <>
        <ButtonToolbar>
            <Button color="cyan" appearance="primary" onClick={() => handleOpen('right')}>
                Información pqrs <i class="fas fa-info-circle"></i>
            </Button>
        </ButtonToolbar>

        <Drawer size={size} placement={placement} open={open} onClose={() => setOpen(false)}>
            <Drawer.Header>
                <Drawer.Title>Información de pqrs.</Drawer.Title>
                <Drawer.Actions>
                </Drawer.Actions>
            </Drawer.Header>
            <Drawer.Body>
                <h2 class="text-uppercase text-center pb-2">PETICIONES, QUEJAS, RECLAMOS, SUGERENCIAS Y DENUNCIAS</h2>
                <hr />
                <p className="text-justify">A través de este medio, todo usuario deberá presentar peticiones, quejas, reclamos y sugerencias ante la Curaduría Urbana N°1 de Bucaramanga. ​Para nosotros es muy importante recibir su comunicación, agradecemos tener en cuenta los siguientes conceptos:</p>
                <div className="fw-bold">PREGUNTA</div>
                <p className="text-justify">Es una actuación por medio de la cual el usuario, de manera respetuosa, solicita a la curaduría cualquier información relacionada con la prestación de los servicios que se prestan en la curaduría.</p>
                <div className="fw-bold">​QUEJA</div>
                <p className="text-justify">Es la expresión o manifestación que le hace el usuario a la empresa por la inconformidad que le generó la atención brindada por un empleado o la prestación del servicio.</p>
                <div className="fw-bold">​RECLAMO</div>
                <p className="text-justify">Es la oposición o contrariedad presentada por el usuario, con el objeto de que la curaduría revise y evalúe una actuación relacionada con la prestación del servicio en términos económicos.</p>
                <div className="fw-bold">​SUGERENCIA</div>
                <p className="text-justify">Es una propuesta presentada con el objetivo de incidir en el mejoramiento de un proceso de la curaduría cuyo objeto está relacionado, con la prestación del servicio a los ciudadanos.</p>
                <div className="fw-bold">DENUNCIA</div>
                <p className="text-justify">Es un mecanismo a través del cual los ciudadanos pueden poner en conocimiento la ocurrencia de una irregularidad o una falta cometida por cualquiera de los empleados de la Entidad.</p>
            </Drawer.Body>
        </Drawer>
    </>
}