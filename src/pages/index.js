import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useAuth } from '../contexts/AuthContext';
import Login from "../components/Login/Login"; // Import useAuth

// Simple Login Component (for demonstration)

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const { setIsLoggedIn } = useAuth();

    return (
        <header className={clsx('hero ', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg margin-right--sm" to="/docs/intro">
                        CS-UI-APPS Documentation Tutorial
                    </Link>
                    <Link className="button button--danger button--lg"  onClick={()=>{
                        setIsLoggedIn(false)
                    }}>
                        Logout
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { isLoggedIn } = useAuth(); // Use the authentication status

    if (!isLoggedIn) {
        // Show the login page if not logged in
        return <Login />;
    }

    // Render the main homepage if logged in
    return (
        <Layout
            title={'Documentation'}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
