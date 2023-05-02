import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import {
  useAuth,
  useUser,
  useSession,
  UserButton,
  SignInButton,
  SignUpButton,
} from '@clerk/nextjs';
import AddTodoForm from '@/components/AddTodoForm';
import Header from '@/components/Header';
import TodoList from '@/components/TodoList';
import supabaseClient from '@/services/supabaseClient';

export default function Home() {
  const { isSignedIn, isLoading, user } = useUser();
  const [todos, setTodos] = useState(null);

  return (
    <>
      <Header />
      {isLoading ? (
        <></>
      ) : (
        <main className={styles.main}>
          <div className={styles.container}>
            {isSignedIn ? (
              <>
                <span className={styles.label}>Welcome {user.firstName}!</span>
                <AddTodoForm todos={todos} setTodos={setTodos} />
                <TodoList todos={todos} setTodos={setTodos} />
              </>
            ) : (
              <div className={styles.label}>
                Sign in to create your todo list!
              </div>
            )}
          </div>
        </main>
      )}
    </>
  );
}
