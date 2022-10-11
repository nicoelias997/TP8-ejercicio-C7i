import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const Weather = (props) => {
  return (
    <Card>
        <Card.Header>
            <Card.Title>{props.ciudad}</Card.Title>
            <Card.Text>{props.pais}</Card.Text>
        </Card.Header>
        <Card.Body>
            <ListGroup>
                <ListGroupItem>Clima: {props.clima}</ListGroupItem> 
                <ListGroupItem>Descripcion: {props.descripcion}</ListGroupItem>
                <ListGroupItem>Tº min: {props.temperaturaMin}</ListGroupItem>
                <ListGroupItem>Tº Max: {props.temperaturaMax}</ListGroupItem>
                <ListGroupItem>Sensacion termina: {props.sensacion}</ListGroupItem>
                <ListGroupItem>Presion: {props.presion}</ListGroupItem>
                <ListGroupItem>Humedad: {props.humedad}</ListGroupItem>
                <ListGroupItem>Velocidad viento: {props.viento}</ListGroupItem>
                <ListGroupItem>Lugar: {props.pais}-{props.ciudad}</ListGroupItem>
            </ListGroup>
        </Card.Body>
    </Card>
  )
}

export default Weather