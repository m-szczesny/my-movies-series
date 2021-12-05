import React from 'react';
import { Modal, Row, Col, Image, Typography } from 'antd';
import { Entry } from '../interfaces/Entry';
import { useEntryDetails } from '../hooks/useCatalog';

const { Text } = Typography;

interface EntryDetailModalProps { 
    item: Entry;
    onCancel: () => void;
}

export const EntryDetailModal: React.FC<EntryDetailModalProps> = ({ item, onCancel }) => {
    const [ entryDetails ] = useEntryDetails(item);
    return (
        <Modal 
            visible title={item.title} 
            onCancel={onCancel}
            footer={null}
            width={860}
        >
            <Row gutter={8}>
                <Col span={6}>
                    <Row>
                        <Image src={item.posterURL} preview={false} />
                    </Row>
                    <Row>
                        <Text>Année : {item.year}</Text>
                    </Row>
                    <Row>
                        <Text>Genres : {entryDetails?.general.genres.map(p => p.name).join(', ')}</Text>
                    </Row>
                    <Row>
                        <Text>Pays : {entryDetails?.general.production_countries.map(p => p.iso_3166_1).join(', ')}</Text>
                    </Row>
                </Col>
                <Col span={18}>
                    <Row>
                        <Text>{item.overview}</Text>
                    </Row>
                    <Row>
                        <Text>Avec : {entryDetails?.credits.cast.map(p => p.name).join(', ')}</Text>
                    </Row>
                    {
                        item.backDropURL &&
                        <Image src={item.backDropURL} preview={false} />
                    }
                </Col>
            </Row>
        </Modal>
    )
}