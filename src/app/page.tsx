import styles from './page.module.css';

export const metadata = {
    title: 'Next.js Starter',
    description: 'A starter for Next.js projects',
    author: 'hcsvnt'
};

export default function Home() {
    return (
        <main className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.background} />
                <h1 className={styles.heading}>hcsvnt/next.js-starter</h1>
                <p>a next js starter</p>
            </div>
        </main>
    );
}
