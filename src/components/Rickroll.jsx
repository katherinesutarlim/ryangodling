import React, { useState, useEffect } from 'react';

const Rickroll = () => {
    const totalLinks = 12;
    const [correctLink, setCorrectLink] = useState(null);

    useEffect(() => {
        setCorrectLink(Math.floor(Math.random() * totalLinks));
    }, []);

    const handleLinkClick = (linkId) => {
        if (linkId === correctLink) {
            window.location.href = 'https://www.google.com/'; // Put the next section here. Placeholder is Google search
        } else {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Rickroll vid
        }
    };

    return (
        <div>
            {[...Array(totalLinks).keys()].map(linkId => (
                <button key={linkId} onClick={() => handleLinkClick(linkId)}>
                    Link {linkId + 1}
                </button>
            ))}
        </div>
    );
};

export default Rickroll;