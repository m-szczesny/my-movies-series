import React, { useState } from 'react';
import { List, Card, Typography, Pagination, Tooltip } from 'antd';
import { EntriesData, Entry } from '../interfaces/Entry';
import { EntryDetailModal } from './EntryDetailModal';

const { Title } = Typography;
const { Meta } = Card;

type PaginateFunctionType = (p: number) => void;

interface EntriesListProps {
    contentData: EntriesData;
    title: string;
    onPaginate: PaginateFunctionType;
}

export const EntriesList: React.FC<EntriesListProps> = ({ 
    title, 
    contentData,
    onPaginate
}) => {
    const [ selectedItem, setSelectedItem ] = useState<Entry | undefined>();
    const { results, page, total_pages } = contentData;
    const onClick = (item: Entry) => {
        setSelectedItem(item);
    }
    const getCardCover = (item: Entry) => <img alt='illustration' src={item.posterURL} />
    const getCardTitle = (item: Entry) => <Tooltip title={item.title}>{item.title}</Tooltip>
    return (
        <> 
            <Title>{title}</Title>
            <List
                grid={{ gutter: 20, column: 5 }}
                dataSource={results}
                renderItem={item => (
                <List.Item>
                    <Card
                        cover={getCardCover(item)}
                        className={'results__card'}
                        onClick={() => onClick(item)}
                        hoverable
                    >
                        <Meta title={getCardTitle(item)} description={item.year} />
                    </Card>
                </List.Item>
                )}
            />
            <Pagination current={page} onChange={onPaginate} total={total_pages} showSizeChanger={false}/>
            {
                selectedItem &&
                <EntryDetailModal 
                    item={selectedItem}
                    onCancel={() => setSelectedItem(undefined)}
                />
            }
        </> 
    )
}