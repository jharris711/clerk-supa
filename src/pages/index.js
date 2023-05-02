import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div>My Todo App</div>
      </header>
      <main>
        <div className={styles.container}>
          Sign in to create your todo list!
        </div>
      </main>
    </>
  );
}
