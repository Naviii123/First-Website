        const video = document.getElementById('myVideo');
        video.addEventListener('ended', function() {
            video.style.opacity = 0; 
            setTimeout(() => {
                video.currentTime = 0; 
                video.style.opacity = 1; 
                video.play(); 
            }, 1000); 
        });
