import React, { useState, useCallback, useEffect } from 'react';
import './index.css';
const data = [
    {
        title: 'level 1, item1',
        key: '1',
        list: [
            {
                title: 'level 2, item1',
                key: '1-1',
            },
            {
                title: 'level 2, item2',
                key: '1-2',
                list: [
                    {
                        title: 'level 3, item1',
                        key: '1-2-1',
                    },
                    {
                        title: 'level 3, item2',
                        key: '1-2-2',
                    },
                    {
                        title: 'level 3, item3',
                        key: '1-2-3',
                    },
                ],
            },
            {
                title: 'level 2, item3',
                key: '1-3',
            },
        ],
    },
    {
        title: 'level 1, item2',
        key: 2,
    },
    {
        title: 'level 1, item3',
        key: 3,
    },
];
const List = ({ list, onSelect, indexKey, index = '1' }) => (<ul>
    {list.map((item, idx) => {
        const key = indexKey ? item[indexKey] : `${index}-${idx}`;
        return (<li key={key}>
          <div onClick={() => onSelect(key)}>{item.title}</div>
          {item.list && (<List list={item.list} onSelect={onSelect} indexKey={indexKey} index={key}/>)}
        </li>);
    })}
  </ul>);
const Tree = ({ multipleSelect = false }) => {
    const [selectedList, setSelectedList] = useState(['']);
    useEffect(() => {
        console.log('selectedList >>>', selectedList);
    }, [selectedList]);
    const onSelect = useCallback(id => {
        if (multipleSelect) {
            //
        }
        else {
            setSelectedList([id]);
        }
    }, [multipleSelect]);
    return <List list={data} onSelect={onSelect} indexKey="key"/>;
};
export default Tree;
