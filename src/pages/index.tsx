import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <h1>Hello Next.js 👋</h1>
        <p>
            <Link href="/about">
                <a>Go to about page</a>
            </Link>
        </p>
        <p>
            <Link href="/data">
                <a>Get data from an API</a>
            </Link>
        </p>
    </Layout>
);

export default IndexPage;
