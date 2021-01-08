import React, { useState, useEffect } from 'react'
import { 
    Container,
    Card,
    ListGroup,
    ListGroupItem,
    Row,
    Col
} from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

import '../assets/scss/adsetlist.scss';

import deleteIcon from '../assets/img/delete.png';

import { usePrevious } from '../hooks/customHooks'


const AdsetList = (props) => {

    const adsets = [
        {id: uuidv4(), name: 'World', value: 125},
        {id: uuidv4(), name: 'Cup', value: 125},
        {id: uuidv4(), name: 'House', value: 452},
        {id: uuidv4(), name: 'Numbers', value: 340},
        {id: uuidv4(), name: 'Hero', value: 452},
        {id: uuidv4(), name: 'Band', value: 340},
        {id: uuidv4(), name: 'Hetzner', value: 125},
        {id: uuidv4(), name: 'Minimal', value: 125},
        {id: uuidv4(), name: 'Digital', value: 452},
        {id: uuidv4(), name: 'Maos', value: 452},
        {id: uuidv4(), name: 'Cats', value: 340},
        {id: uuidv4(), name: 'Soft', value: 340},
        {id: uuidv4(), name: 'Samsung', value: 125},
        {id: uuidv4(), name: 'Students', value: 125},
        {id: uuidv4(), name: 'Cola', value: 452},
        {id: uuidv4(), name: 'Sprite', value: 340},
        {id: uuidv4(), name: 'Tea', value: 340},
        {id: uuidv4(), name: 'Coffee', value: 340}
    ]

    const { rangeValue } = props;

    const [adsetsArray, setAdsets] = useState([])

    const prevAdsets = usePrevious(adsetsArray);
    
    // eslint-disable-next-line
    useEffect(() => {
        if (prevAdsets === adsetsArray || !adsetsArray.length) {
            const numberOfAdsets = Math.floor(adsets.length);
            const itemsPerAdset = Math.floor(numberOfAdsets / rangeValue);
            const residual = numberOfAdsets % rangeValue;
            let tempArray = [];
    
            for (let i = 0; i < rangeValue; i++) {
                const slicedArray = adsets.slice(i * itemsPerAdset, i * itemsPerAdset + itemsPerAdset);
                if (slicedArray.length) {
                    tempArray.push(slicedArray);
                }
            }

            if (residual) {
                let count = 0;
                for (let i = numberOfAdsets - residual; i < numberOfAdsets; i++) {
                    tempArray[count].push(adsets[i])
                    count++;
                }
            }
            setAdsets(tempArray);
        }
    })

    const move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);
    
        destClone.splice(droppableDestination.index, 0, removed);
    
        const result = {};
        result['source'] = sourceClone;
        result['destination'] = destClone;

        return result;
    };

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const getItemStyle = (isDragging, draggableStyle) => ({
        background: isDragging ? '#484A54' : 'white',
        ...draggableStyle
    });

    const getListStyle = (isDraggingOver) => ({
        paddingBottom : isDraggingOver ? '50px' : '0'
    });

    const onDragStart = (result) => {
        let cards = document.querySelectorAll('.adset-card');
        cards.forEach((card, index) => {
            if (parseInt(result.source.droppableId) !== index) {
                card.classList.add('drag-mode')
            }
        })
    }

    const onDragEnd = (result) => {
        
        const { source, destination } = result;
        const sourceId = parseInt(source.droppableId);
        const destId = parseInt(destination.droppableId);

        let cards = document.querySelectorAll('.adset-card');
        cards.forEach(card => {
            card.classList.remove('drag-mode')
        })

        if (!destination) {
            return;
        } if (source.droppableId === destination.droppableId) {
            const items = reorder(
                adsetsArray[sourceId],
                source.index,
                destination.index
            );
            let cloneAdsetsArray = Array.from(adsetsArray);
            cloneAdsetsArray[sourceId] = items;
            setAdsets(cloneAdsetsArray);
        } else {
            const result = move(
                adsetsArray[sourceId],
                adsetsArray[destId],
                source,
                destination
            );

            let cloneAdsetsArray = Array.from(adsetsArray);
            cloneAdsetsArray[sourceId] = result.source;
            cloneAdsetsArray[destId] = result.destination;

            setAdsets(cloneAdsetsArray);
        }
    };

    return (
        <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <Container>
                <section className="adset-list">
                    <Row className="justify-content-center justify-content-lg-start">
                        {adsetsArray && adsetsArray.map((adset, index) => {
                            return (
                                <Col key={index} xs={12} sm={6} lg={4} xl={3}>
                                    <Droppable droppableId={index.toString()}>
                                        { (provided, snapshot) => (
                                            <Card className="adset-card" style={getListStyle(snapshot.isDraggingOver)}>
                                                <Card.Header>
                                                    <Card.Title>
                                                        <h2>Test Adset {index + 1}</h2>
                                                    </Card.Title>
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </Card.Header>
                                                <Card.Body ref={provided.innerRef}>
                                                    <ListGroup className="list-group-flush">
                                                        { adset && adset.map((item, index) => {
                                                            return (
                                                                <Draggable 
                                                                    draggableId={item.id} 
                                                                    index={index}
                                                                    key={item.id}
                                                                >
                                                                    { (provided, snapshot) => (
                                                                        <ListGroupItem
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                            style={getItemStyle(
                                                                                snapshot.isDragging,
                                                                                provided.draggableProps.style
                                                                            )}
                                                                        >
                                                                            <i style={snapshot.isDragging ? {color: 'white'} : {}} className="fas fa-ellipsis-v"></i>
                                                                            <span style={snapshot.isDragging ? {color: 'white'} : {}} className="name">{item.name}</span> 
                                                                            <span style={snapshot.isDragging ? {color: 'white'} : {}} className="value">{item.value}</span>
                                                                            <img src={deleteIcon} alt="Delete"/>
                                                                        </ListGroupItem>
                                                                    )}
                                                                </Draggable>
                                                            )
                                                        })}
                                                    </ListGroup>
                                                </Card.Body>
                                            </Card>
                                        )}
                                    </Droppable>
                                </Col>
                            )
                        })}
                    </Row>
                </section>
            </Container>
        </DragDropContext>
    )
}






export default AdsetList;