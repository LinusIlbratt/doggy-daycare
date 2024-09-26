import './Home.css';

function Home() {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p>
                Welcome to Doggy Daycare! Here's what's happening today. Stay up-to-date with the 
                latest tasks, updates, and important reminders to ensure every dog in our care has 
                a safe and fun day. Remember to check the notifications for any new arrivals, 
                upcoming events, and essential tasks that need your attention throughout the day.
            </p>

            {/* Notifications Section */}
            <div className="notifications">
                <h2>Notifications</h2>
                <ul>
                    <li>New dog registration awaiting your review.</li>
                    <li>Outdoor play area maintenance scheduled for this afternoon.</li>
                    <li>Reminder: Report any behavioral concerns by 3 PM.</li>
                </ul>
            </div>

            {/* Tasks Section */}
            <div className="tasks">
                <h2>Today's Tasks</h2>
                <ul>
                    <li>Greet and settle new arrivals before 10 AM.</li>
                    <li>Ensure all feeding schedules are updated for lunch.</li>
                    <li>Prepare grooming supplies for the afternoon session.</li>
                </ul>
            </div>

            {/* Recent Activity Section */}
            <div className="recent-activity">
                <h2>Recent Activity</h2>
                <ul>
                    <li>2 new dogs checked in this morning: Bella (Labrador) and Rocky (Beagle).</li>
                    <li>Grooming session completed for Daisy (Cocker Spaniel).</li>
                    <li>Morning outdoor play session completed with no issues.</li>
                </ul>
            </div>

            {/* Upcoming Events Section */}
            <div className="upcoming-events">
                <h2>Upcoming Events</h2>
                <ul>
                    <li>Staff meeting to discuss new safety protocols on Friday at 2 PM.</li>
                    <li>Dog training workshop for large breeds next Monday at 11 AM.</li>
                </ul>
            </div>            
        </div>
    );
}

export default Home;
