import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import Weather from './Weather'
import {ciudades} from '../ciudades'

const Mapa = () => {

    const [pais, setPais] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [clima, setClima] = useState("")

    const validaciones = ciudadElegida => {
        console.log(ciudadElegida)
        return true
    // for(let i = 0; i < ciudades.length; i++){
    //     for(let propiedades in ciudades){
    //         if(ciudades[propiedades].name === ciudadElegida){
    //             console.log("vamo")
    //         } else {
    //             console.log("No existe una ciudad con ese nombre")
                
    //         }
    //     }
    // }
        
    }

    const buscarClima = async () => {

        try{
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=afd295ef079eff0a0103852b80dc43d5`)
            let data = await res.json()
            if(validaciones(data.name)){
                setClima({
                    pais: data.sys.country,
                    ciudad: data.name,
                    clima: data.weather[0].main,
                    descripcion: data.weather[0].description,
                    tempMax: data.main.temp_max,
                    tempMin: data.main.temp_min,
                    sensacion: data.main.feels_like,
                    presion: data.main.pressure,
                    humedad: data.main.humidity,
                    viento: data.wind.speed
                })
            } else {
                alert("No existe una ciudad con ese nombre")
            }

        } catch(e){
            console.log(e)
        }
        console.log(clima)

    }

  return (
    <Col sm={12} md={10} lg={8}>
    <Card className='mt-3'>
        <Card.Header>
            <Card.Title>Clima de {pais} - {ciudad}</Card.Title>
        </Card.Header>
        <Card.Body>
            <Form>
        <Row>
            <Form.Group>
                <Form.Label>Ubicacion:</Form.Label>
                <Form.Control placeholder='Ingrese su ciudad' onChange={e => setCiudad(e.target.value)}>
                   
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Pais:</Form.Label>
                <Form.Control placeholder='Ingrese su Pais' onChange={e => setPais(e.target.value)}>
                   
                </Form.Control>
            </Form.Group>

        </Row>
        </Form>
        </Card.Body>
        <Card.Footer>
            <Button className='btn btn-sm btn-warning float-end' onClick={() => buscarClima()}>Buscar</Button>
        </Card.Footer>
    </Card>
    {   
            <Weather ciudad={clima.ciudad} pais={clima.pais} clima={clima.clima} descripcion={clima.descripcion} temperaturaMin={clima.tempMin} temperaturaMax={clima.tempMax} sensacion={clima.sensacion} presion={clima.presion} humedad={clima.humedad} viento={clima.viento}
            ></Weather>
    }

    </Col>
  )
}

export default Mapa