import styles from '@/styles/Home.module.css';
import { useUser, UserButton, SignInButton, SignUpButton } from '@clerk/nextjs';

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header className={styles.header}>
      <div>My Todo App</div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div>
          <SignInButton />
          &nbsp;
          <SignUpButton />
        </div>
      )}
    </header>
  );
};

export default Header;
