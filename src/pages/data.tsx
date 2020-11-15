import React, { FC, useCallback, useState } from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import { ListItem } from '../interfaces';

export interface DataPageProps {
    text: string;
}
const DataPage: FC<DataPageProps> = ({ text }) => {
    const [list, setList] = useState<ListItem[]>([]);
    const [isSending, setIsSending] = useState<boolean>(false);
    const getList = useCallback(async () => {
        if (!isSending) {
            setIsSending(true);
            await fetch('http://localhost:3000/api/hello/list').then(async (response) => {
                setList(await response.json());
                setIsSending(false);
            });
        } else return;
    }, [isSending]);

    return (
        <Layout title="Fetching data dynamically">
            <h1>This is a page with data</h1>
            <p>{text}</p>
            <button onClick={() => getList()}>Click here to download dynamic data</button>
            <ul>
                {list
                    ? list.map((li: ListItem) => {
                          return <li key={`${li.id}`}>{li.name}</li>;
                      })
                    : null}
            </ul>
        </Layout>
    );
};

export default DataPage;

export const getServerSideProps: GetServerSideProps<DataPageProps> = async (_ctx) => {
    const hello = await fetch('http://localhost:3000/api/hello');
    const text = await hello.text();

    return { props: { text } };
};
