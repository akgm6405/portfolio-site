import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="home-container">
      {showModal && (
        <div className="intro-modal">
          <h1>Hello, I'm Abhishek Gautam</h1>
          <p>Software Developer | Data Analytics | AI Enthusiast</p>
          <p>Turning data and code into real-world impact.</p>
        </div>
      )}
    </div>
  );
}
