import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import Weather from './Weather'
import {ciudades} from '../ciudades'

import Swal from 'sweetalert2'

const Mapa = () => {

    const [pais, setPais] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [clima, setClima] = useState("")

    const validaciones = ciudadElegida => {
        const haveCity = ciudades.find(ciudadArray => ciudadArray.name === ciudadElegida)
        if(haveCity){
            console.log(ciudadElegida)
            return true
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ciudad incorrecta',
                text: "No encontramos una ciudad con ese nombre, prueba London",
                footer: 'La primera letra debe ser con MAYUSCULA!'
              })
            return
        }
        
        
    }

    const buscarClima = async () => {
        if(validaciones(ciudad)){

        try{
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=afd295ef079eff0a0103852b80dc43d5`)
            let data = await res.json()
                setClima({
                    pais: data.sys.country,
                    ciudad: data.name,
                    clima: data.weather[0].main,
                    descripcion: data.weather[0].description,
                    tempMax: Math.round(data.main.temp_max - 273 ),
                    tempMin: Math.round(data.main.temp_min - 273),
                    sensacion: Math.round(data.main.feels_like - 273),
                    presion: data.main.pressure,
                    humedad: data.main.humidity,
                    viento: data.wind.speed,
                    icon: data.weather[0].icon
                })

        } catch(e){
            console.log(e)
        }
        setCiudad("")
    } 
        return
    }

  return (
    <Col sm={12} md={10} lg={8}>
    <Card>
        <Card.Header>
            <Card.Title>Clima</Card.Title>
        </Card.Header>
        <Card.Body>
            <Form>
        <Row>
            <Form.Group>
                <Form.Label>Ubicacion:</Form.Label>
                <Form.Control placeholder='Ingrese su ciudad' value={ciudad} onChange={e => setCiudad(e.target.value)}>   
                </Form.Control>
            </Form.Group>
            <Form.Group className='mt-2 mb-2'>
                <Form.Label>Pais:</Form.Label>
                <Form.Control placeholder='Ingrese su Pais' value={pais} onChange={e => setPais(e.target.value)}>
                   
                </Form.Control>
            </Form.Group>

        </Row>
        </Form>
        </Card.Body>
        <Card.Footer>
            <Button className='btn btn-sm btn-warning float-end' onClick={() => buscarClima()}>Consultar</Button>
        </Card.Footer>
    </Card>
    {   
            <Weather ciudad={clima.ciudad} pais={clima.pais} clima={clima.clima} descripcion={clima.descripcion} temperaturaMin={clima.tempMin} temperaturaMax={clima.tempMax} sensacion={clima.sensacion} presion={clima.presion} humedad={clima.humedad} viento={clima.viento} icon={clima.icon}
            ></Weather>
    }

    </Col>
  )
}

export default Mapa