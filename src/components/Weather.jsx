import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const Weather = (props) => {
  return (
    <Card>
        <Card.Header className='text-center'>
            <Card.Title>{props.ciudad}</Card.Title>
            <Card.Text>{props.pais}</Card.Text>
            <Card.Img src={props.icon} alt={props.clima}></Card.Img>
        </Card.Header>
        <Card.Body>
            <ListGroup>
                <ListGroupItem>Clima: {props.clima}</ListGroupItem> 
                <ListGroupItem>Descripcion: {props.descripcion}</ListGroupItem>
                <ListGroupItem>Tº min: {props.temperaturaMin} ºC</ListGroupItem>
                <ListGroupItem>Tº Max: {props.temperaturaMax} ºC</ListGroupItem>
                <ListGroupItem>Sensacion termina: {props.sensacion} ºC</ListGroupItem>
                <ListGroupItem>Presion: {props.presion} hPa</ListGroupItem>
                <ListGroupItem>Humedad: {props.humedad} %</ListGroupItem>
                <ListGroupItem>Velocidad viento: {props.viento} Km/h</ListGroupItem>
            </ListGroup>
        </Card.Body>
    </Card>
  )
}

export default Weather