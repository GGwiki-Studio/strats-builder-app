import Link from 'next/link'
type NavBarProps = {
  user: {
    id: string
    username: string
  } | null
}

const NavBar = ({user}: NavBarProps) => {
  return (
    <header style={styles.header}>
        <div style={styles.container}>
            <a href="/home" style={styles.logo}>GGWIKI</a>
            <nav style={styles.nav}>
                {!user ? (
                <a href="/signin" style={styles.navLink}>Sign In</a>
                ) : (
                    <>
                    <a href="/submit" style={styles.button}>+ New Post</a>

                    <Link
                        href={`/profile/${user.username}-${user.id}`}
                        style={styles.navLink}
                    >
                        Profile
                    </Link>
                    </>
                )}
            </nav>
        </div>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold' as const,
    textDecoration: 'none',
    color: '#0079d3',
    letterSpacing: '-0.5px',
  },
  nav: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  navLink: {
    color: '#0079d3',
    textDecoration: 'none',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#0079d3',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '14px',
  },
}

export default NavBar