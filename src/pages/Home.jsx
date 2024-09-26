import './Home.css';

function Home() {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p>Welcome! Here's what's happening today.</p>


            <div className="notifications">
                <h2>Notifications</h2>
                <ul>
                    <li>New dog registration pending approval.</li>
                    <li>System maintenance scheduled for tomorrow.</li>
                </ul>
            </div>

            <div className="tasks">
                <h2>Today's Tasks</h2>
                <ul>
                    <li>Check new dog arrivals by 10 AM</li>
                    <li>Review grooming schedule for today</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
