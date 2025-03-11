window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQDX3M1-_SYAWWBqAU4qeDzKUy1s7cP6bKgpt9OADnVpnImw_Nlq2DVd1kd4mS9xgL1pG4Jay7XBRxlrZi0sVc309yQRFE8C0FHNXZJEcr_kGIPQc6HPG02-fmkrpPamtUV9fC1hXk4TvuFuY-2M6Q-ORijtp3Jnav5AFfu4y7GOYMSCUTn4yxK1Jvcs5m6zIjhcAW522buYMUXQhkKm6Ek_TZVF';

    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); }
    });

    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });

    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        const playTrackButton = document.getElementById('playTrack');
        playTrackButton.addEventListener('click', () => {
            playTrack(device_id); // Gọi hàm playTrack khi button được click
        });
    });

    // Connect to the player!
    player.connect();
};

function playTrack(device_id) {
    fetch('https://api.spotify.com/v1/me/player/play', {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer BQDX3M1-_SYAWWBqAU4qeDzKUy1s7cP6bKgpt9OADnVpnImw_Nlq2DVd1kd4mS9xgL1pG4Jay7XBRxlrZi0sVc309yQRFE8C0FHNXZJEcr_kGIPQc6HPG02-fmkrpPamtUV9fC1hXk4TvuFuY-2M6Q-ORijtp3Jnav5AFfu4y7GOYMSCUTn4yxK1Jvcs5m6zIjhcAW522buYMUXQhkKm6Ek_TZVF', // Thay YOUR_ACCESS_TOKEN bằng access token của bạn
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uris: ['spotify:track:4acXEYw7ayyJnm9GXDrqiL'], // Thay '4acXEYw7ayyJnm9GXDrqiL' bằng Spotify track ID
            device_id: device_id,
        }),
    });
}
