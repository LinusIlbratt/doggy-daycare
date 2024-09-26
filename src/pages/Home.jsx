import './Home.css';

function Home() {
    return (
        <div className="home-page">
            <h1>Welcome to Doggy Daycare</h1>
            <p className="subtext">Helping you manage our furry friends with ease.</p>
            
            <div className="quick-actions">
                <button>Register New Dog</button>
                <button>View Dogs</button>
                <button>View Schedule</button>
            </div>

            <section className="notifications">
                <h2>Notifications</h2>
                <ul>
                    <li>New dog registration pending approval.</li>
                    <li>System maintenance scheduled for tomorrow.</li>
                </ul>
            </section>

            <section className="tasks">
                <h2>Today's Tasks</h2>
                <ul>
                    <li>Check new dog arrivals by 10 AM</li>
                    <li>Review grooming schedule for today</li>
                </ul>
            </section>
        </div>
    );
}

export default Home;
